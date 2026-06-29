import { useFadeIn } from './useFadeIn'
import styles from './Skills.module.css'

const reassurances = [
  { emoji: '💬', title: 'Je parle votre langue',    desc: 'Pas de jargon technique. Je vous explique tout simplement, comme à un ami.' },
  { emoji: '⚡', title: 'Réactif et disponible',    desc: 'Je réponds dans la journée et je vous tiens informé à chaque étape du projet.' },
  { emoji: '💰', title: 'Tarifs transparents',       desc: 'Devis gratuit, prix fixe annoncé d\'avance. Pas de mauvaises surprises à la fin.' },
  { emoji: '🤝', title: 'Je reste là après',         desc: 'La livraison n\'est pas la fin. Je reste disponible pour vous aider et faire évoluer votre projet.' },
  { emoji: '📍', title: 'Local et à distance',       desc: 'Je peux me déplacer dans le Vaucluse ou intervenir par visio partout en France.' },
]

export default function Skills() {
  const { ref, inView } = useFadeIn()

  return (
    <section className={styles.section}>
      <div className={styles.dots} />
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.tag}>Pourquoi moi ?</p>
          <h2 className={styles.title}>Ce qui fait la différence</h2>
          <p className={styles.sub}>
            Des centaines de développeurs existent. Voilà ce que vous obtenez en travaillant avec moi.
          </p>
        </div>

        <div ref={ref} className={styles.grid}>
          {reassurances.map((r, i) => (
            <div
              key={r.title}
              className={`${styles.card} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className={styles.cardInner}>
                <span className={styles.emoji}>{r.emoji}</span>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardDesc}>{r.desc}</p>
              </div>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
