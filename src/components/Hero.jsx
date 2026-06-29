import { useEffect, useState } from 'react'
import Counter from './Counter'
import styles from './Hero.module.css'

export default function Hero() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 350),
      setTimeout(() => setStep(3), 600),
      setTimeout(() => setStep(4), 850),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Background grain */}
      <div className={styles.grain} />

      {/* Floating shapes */}
      <div className={styles.shapes}>
        <div className={`${styles.shape} ${styles.s1}`} />
        <div className={`${styles.shape} ${styles.s2}`} />
        <div className={`${styles.shape} ${styles.s3}`} />
      </div>

      <div className={styles.inner}>
        <div className={styles.photoWrap}>
          <div className={`${styles.photo} ${step >= 1 ? styles.in : ''}`}>SG</div>
          <div className={`${styles.ring} ${step >= 1 ? styles.ringIn : ''}`} />
          <div className={`${styles.badge} ${step >= 2 ? styles.badgeIn : ''}`}>
            <span className={styles.pulse} />
            Disponible
          </div>
        </div>

        <div className={styles.text}>
          <p className={`${styles.hello} ${step >= 1 ? styles.fadeIn : ''}`}>Bonjour, je suis</p>

          <h1 className={styles.name}>
            <span className={`${styles.nameLine} ${step >= 2 ? styles.reveal : ''}`}>Sébastien</span>
            <span className={`${styles.nameLine} ${styles.nameAccent} ${step >= 2 ? styles.reveal : ''}`} style={{transitionDelay: '.12s'}}>Guimety</span>
          </h1>

          <p className={`${styles.tagline} ${step >= 3 ? styles.fadeIn : ''}`}>
            Je crée des <span>sites web</span> et des <span>applis</span><br/>
            pour les artisans, commerçants et indépendants.
          </p>

          <p className={`${styles.location} ${step >= 3 ? styles.fadeIn : ''}`}>📍 Vaucluse · à distance dans toute la France</p>

          <div className={`${styles.ctas} ${step >= 4 ? styles.fadeIn : ''}`}>
            <a href="#contact" className="btn btn-primary">Parler de mon projet</a>
            <a href="#projets" className="btn btn-ghost">Voir mes réalisations ↓</a>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className={`${styles.statsBar} ${step >= 4 ? styles.statsIn : ''}`}>
        <div className={styles.stat}>
          <span className={styles.statN}><Counter end={3} suffix="+" /></span>
          <span className={styles.statL}>projets livrés</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statN}><Counter end={3} /></span>
          <span className={styles.statL}>ans d'expérience</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statN}><Counter end={24} suffix="h" /></span>
          <span className={styles.statL}>délai de réponse</span>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  )
}
