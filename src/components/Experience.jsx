import { useFadeIn } from './useFadeIn'
import styles from './Experience.module.css'

const steps = [
  {
    year: 'Université',
    emoji: '🎓',
    title: 'Les bases du développement',
    desc: 'Master en informatique, CERI Avignon. Premiers projets web, dont un site pour un labo de recherche universitaire.',
  },
  {
    year: '1 an',
    emoji: '📱',
    title: 'Développeur d\'applications mobiles',
    desc: 'J\'ai créé des applications sur iPhone et Android pour une entreprise. J\'ai appris à faire des interfaces simples et agréables à utiliser.',
  },
  {
    year: '2 ans',
    emoji: '🔗',
    title: 'Faire parler les logiciels entre eux',
    desc: 'J\'ai travaillé sur des projets où plusieurs systèmes informatiques devaient s\'échanger des données automatiquement — un peu comme un "chef d\'orchestre" entre les logiciels.',
  },
  {
    year: 'Aujourd\'hui',
    emoji: '🌟',
    title: 'À votre service en freelance',
    desc: 'Je mets toute cette expérience au service des particuliers, artisans et TPE/PME. Avec un seul objectif : que ça marche vraiment pour vous.',
  },
]

export default function Experience() {
  const { ref, inView } = useFadeIn()

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.tag}>Mon parcours</p>
        <h2 className={styles.title}>D'où je viens,<br/>pourquoi vous pouvez me faire confiance</h2>

        <div ref={ref} className={styles.steps}>
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`${styles.step} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={styles.stepLeft}>
                <div className={styles.iconWrap}>{s.emoji}</div>
                {i < steps.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.stepBody}>
                <span className={styles.year}>{s.year}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
