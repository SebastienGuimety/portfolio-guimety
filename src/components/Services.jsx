import { useFadeIn } from './useFadeIn'
import TiltCard from './TiltCard'
import styles from './Services.module.css'

const services = [
  { emoji: '🌐', title: 'Votre vitrine sur internet',        desc: 'Un site beau et professionnel que vos clients trouvent sur Google. Présentez votre activité, vos horaires, vos photos.', exemple: 'Idéal pour : boulanger, coiffeur, restaurant, artisan…' },
  { emoji: '📱', title: 'Une appli pour votre métier',       desc: 'Un outil numérique sur mesure pour gagner du temps au quotidien — prise de rendez-vous, suivi clients, gestion de planning.', exemple: 'Idéal pour : professions libérales, cabinets, PME…' },
  { emoji: '⚙️', title: 'Automatiser ce qui vous prend du temps', desc: 'Les tâches répétitives sur ordinateur, les rappels, les exports de données — je les automatise pour vous.', exemple: 'Idéal pour : secrétariats, comptables, assistants…' },
  { emoji: '🖥️', title: 'Dépannage informatique',            desc: 'Ordinateur lent, imprimante en panne, réseau qui ne marche plus. J\'interviens chez vous ou à distance rapidement.', exemple: 'Partout dans le Vaucluse ou en visio' },
]

export default function Services() {
  const { ref, inView } = useFadeIn()

  return (
    <section id="services" className={styles.section}>
      {/* Dot grid background */}
      <div className={styles.dots} />

      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.tag}>Ce que je fais</p>
          <h2 className={styles.title}>Je vous aide à vous<br/>développer sur internet</h2>
          <p className={styles.sub}>Pas de jargon. Pas de complications. Je m'adapte à votre niveau et je vous explique chaque étape.</p>
        </div>

        <div ref={ref} className={styles.grid}>
          {services.map((s, i) => (
            <TiltCard
              key={s.title}
              className={`${styles.card} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
              intensity={6}
            >
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{s.emoji}</span>
                <div className={styles.iconGlow} />
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <p className={styles.exemple}>{s.exemple}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
