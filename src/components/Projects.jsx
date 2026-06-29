import { useState } from 'react'
import { useFadeIn } from './useFadeIn'
import styles from './Projects.module.css'

const projects = [
  {
    slug: 'coing-du-ventoux',
    emoji: '🍋',
    bg: 'gold',
    client: 'Marque artisanale • Vaucluse',
    title: 'Au Coing du Ventoux',
    tagline: 'Site vitrine pour une marque de spiritueux artisanaux',
    story: 'Une famille du Ventoux produit depuis plusieurs générations des alcools et liqueurs à base de coing — une spécialité locale rare. Ils voulaient une présence en ligne à la hauteur de leur savoir-faire : élégante, chaleureuse, et qui donne envie de goûter.',
    mission: [
      'Concevoir l\'identité visuelle du site en cohérence avec l\'univers de la marque',
      'Mettre en valeur les produits avec une galerie photo immersive',
      'Raconter l\'histoire de la famille et du territoire',
      'Intégrer un formulaire de contact pour les commandes et questions',
    ],
    result: 'Un site React élégant, rapide, entièrement responsive — qui reflète l\'authenticité de la marque et donne envie de découvrir les produits.',
    link: 'https://www.aucoingduventoux.com',
    tags: ['React', 'Tailwind CSS', 'Responsive', 'Site vitrine'],
    // Photos à placer dans /public/projects/coing/
    photos: [
      { src: '/projects/coing/screenshot-home.jpg',    alt: 'Page d\'accueil du site Au Coing du Ventoux' },
      { src: '/projects/coing/screenshot-produits.jpg', alt: 'Page produits' },
      { src: '/projects/coing/screenshot-histoire.jpg', alt: 'Section histoire de la famille' },
      { src: '/projects/coing/screenshot-mobile.jpg',   alt: 'Version mobile du site' },
    ],
  },
]

function ProjectCard({ p }) {
  const [activePhoto, setActivePhoto] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const { ref, inView } = useFadeIn()

  return (
    <div ref={ref} className={`${styles.project} ${inView ? styles.visible : ''}`}>

      {/* ── Header ── */}
      <div className={styles.projectHeader}>
        <div className={styles.headerLeft}>
          <p className={styles.client}>{p.client}</p>
          <h3 className={styles.title}>{p.title}</h3>
          <p className={styles.tagline}>{p.tagline}</p>
        </div>
        <div className={styles.headerRight}>
          {p.link && (
            <a href={p.link} target="_blank" rel="noreferrer" className={styles.visitBtn}>
              Voir le site ↗
            </a>
          )}
        </div>
      </div>

      {/* ── Galerie ── */}
      <div className={styles.gallery}>
        {/* Photo principale */}
        <div className={styles.mainPhotoWrap} onClick={() => setLightbox(activePhoto)}>
          <img
            src={p.photos[activePhoto].src}
            alt={p.photos[activePhoto].alt}
            className={styles.mainPhoto}
            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
          />
          <div className={styles.photoPlaceholder}>
            <span>📸</span>
            <span>Photo à venir</span>
          </div>
          <div className={styles.zoomHint}>🔍 Cliquer pour agrandir</div>
        </div>

        {/* Thumbnails */}
        {p.photos.length > 1 && (
          <div className={styles.thumbs}>
            {p.photos.map((ph, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${i === activePhoto ? styles.thumbActive : ''}`}
                onClick={() => setActivePhoto(i)}
              >
                <img
                  src={ph.src}
                  alt={ph.alt}
                  onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.classList.add(styles.thumbFallback) }}
                />
                <span className={styles.thumbNum}>{i + 1}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Contenu ── */}
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Le projet</h4>
            <p className={styles.blockText}>{p.story}</p>
          </div>

          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Ma mission</h4>
            <ul className={styles.missionList}>
              {p.mission.map((m, i) => (
                <li key={i} className={styles.missionItem}>
                  <span className={styles.missionDot} />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.resultCard}>
            <p className={styles.resultLabel}>Résultat</p>
            <p className={styles.resultText}>{p.result}</p>
          </div>

          <div className={styles.tagsWrap}>
            {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>

          {p.link && (
            <a href={p.link} target="_blank" rel="noreferrer" className={styles.visitBtnBig}>
              Visiter le site ↗
            </a>
          )}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => { e.stopPropagation(); setLightbox(l => (l - 1 + p.photos.length) % p.photos.length) }}
          >‹</button>
          <img
            src={p.photos[lightbox].src}
            alt={p.photos[lightbox].alt}
            className={styles.lightboxImg}
            onClick={e => e.stopPropagation()}
          />
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => { e.stopPropagation(); setLightbox(l => (l + 1) % p.photos.length) }}
          >›</button>
          <p className={styles.lightboxCaption}>{p.photos[lightbox].alt}</p>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projets" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.sectionTag}>Réalisations</p>
          <h2 className={styles.sectionTitle}>Un projet concret,<br/>pour des gens comme vous</h2>
        </div>

        {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </section>
  )
}
