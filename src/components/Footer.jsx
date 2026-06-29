import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.dot} />
          Guimety Sébastien
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} · Freelance dev web & mobile · Vaucluse
        </p>
        <div className={styles.socials}>
          <a href="mailto:seb.guimety@gmail.com" aria-label="Email">✉</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>
        </div>
      </div>
    </footer>
  )
}
