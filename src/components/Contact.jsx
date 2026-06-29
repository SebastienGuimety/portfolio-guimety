import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useFadeIn } from './useFadeIn'
import styles from './Contact.module.css'

const EMAILJS_SERVICE_ID  = 'service_b88i0mv'
const EMAILJS_TEMPLATE_ID = 'template_cbvtg6c'
const EMAILJS_PUBLIC_KEY  = 'CxpezWtJfYsj27ws6'

const types = [
  'Un site internet',
  'Une application mobile ou web',
  'Automatiser quelque chose',
  'Dépannage informatique',
  'Je ne sais pas encore',
]

export default function Contact() {
  const formRef = useRef()
  const { ref, inView } = useFadeIn()
  const [status, setStatus] = useState('idle')
  const [values, setValues] = useState({ name: '', email: '', phone: '', type: types[0], message: '' })

  const set = (k) => (e) => setValues(v => ({ ...v, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('sent')
      setValues({ name: '', email: '', phone: '', type: types[0], message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <h2 className={styles.bannerTitle}>Vous avez un projet en tête ?</h2>
            <p className={styles.bannerSub}>Décrivez-le moi en quelques mots. C'est gratuit, sans engagement, et je réponds dans la journée.</p>
          </div>
          <div className={styles.bannerStats}>
            <div className={styles.stat}>
              <span className={styles.statN}>24h</span>
              <span className={styles.statL}>Délai de réponse</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statN}>100%</span>
              <span className={styles.statL}>Devis gratuit</span>
            </div>
          </div>
        </div>

        <div ref={ref} className={`${styles.wrapper} ${inView ? styles.visible : ''}`}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Ou contactez-moi directement</h3>
            <div className={styles.contacts}>
              <a href="tel:+33608103374" className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <p className={styles.contactLabel}>Téléphone</p>
                  <p className={styles.contactVal}>06 08 10 33 74</p>
                </div>
              </a>
              <a href="mailto:seb.guimety@gmail.com" className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactVal}>seb.guimety@gmail.com</p>
                </div>
              </a>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <p className={styles.contactLabel}>Zone d'intervention</p>
                  <p className={styles.contactVal}>Vaucluse · Remote toute la France</p>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formTitle}>Parlez-moi de votre projet</div>

            <div className={styles.field}>
              <label>Votre nom *</label>
              <input name="name" type="text" required placeholder="Marie Martin" value={values.name} onChange={set('name')} />
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Email *</label>
                <input name="email" type="email" required placeholder="marie@exemple.fr" value={values.email} onChange={set('email')} />
              </div>
              <div className={styles.field}>
                <label>Téléphone</label>
                <input name="phone" type="tel" placeholder="06 xx xx xx xx" value={values.phone} onChange={set('phone')} />
              </div>
            </div>
            <div className={styles.field}>
              <label>J'ai besoin de…</label>
              <select name="type" value={values.type} onChange={set('type')}>
                {types.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className={styles.field}>
              <label>Dites-m'en plus</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Décrivez votre projet, votre activité, vos besoins…"
                value={values.message}
                onChange={set('message')}
              />
            </div>

            <button type="submit" className={styles.submit} disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi en cours…' : '✉ Envoyer ma demande'}
            </button>

            {status === 'sent' && (
              <p className={styles.success}>✓ Reçu ! Je vous réponds dans la journée.</p>
            )}
            {status === 'error' && (
              <p className={styles.error}>Problème d'envoi. Appelez-moi directement au 06 08 10 33 74.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
