import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services',    href: '#services'   },
    { label: 'Projets',     href: '#projets'    },
    { label: 'Parcours',    href: '#experience' },
    { label: 'Contact',     href: '#contact'    },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.dot} />
          Guimety Sébastien
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.link} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary" style={{ fontSize: '.82rem', padding: '8px 18px' }}>
          Me contacter
        </a>

        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
