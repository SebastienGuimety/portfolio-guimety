# Portfolio — Guimety Sébastien

Site React/Vite : portfolio + blog + formulaire de contact.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir http://localhost:5173

## Build pour production

```bash
npm run build
```

Le dossier `dist/` est prêt à déployer.

---

## Déploiement sur Netlify

### Option A — Drag & drop (le plus simple)

1. `npm run build`
2. Aller sur [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
3. Glisser le dossier `dist/` dans la zone de dépôt
4. C'est en ligne en 30 secondes

### Option B — Déploiement continu via GitHub (recommandé)

1. Pousser le code sur un repo GitHub
2. Netlify → "Add new site" → "Import an existing project" → GitHub
3. Sélectionner le repo
4. Build command : `npm run build`
5. Publish directory : `dist`
6. Deploy → Netlify détecte les changements et redéploie automatiquement

### Ajouter son domaine (ex: guimety.fr)

1. Netlify → Site settings → Domain management → "Add custom domain"
2. Entrer `guimety.fr`
3. Aller sur OVH → Zone DNS → Modifier le champ A avec l'IP Netlify indiquée
4. Attendre 10-30 min (propagation DNS)
5. Netlify génère le HTTPS automatiquement (Let's Encrypt)

---

## Formulaire de contact (EmailJS)

Le formulaire utilise [EmailJS](https://emailjs.com) — gratuit jusqu'à 200 emails/mois.

### Configuration

1. Créer un compte sur emailjs.com
2. "Email Services" → Ajouter Gmail → Autoriser
3. "Email Templates" → Créer un template avec les variables :
   - `{{name}}` — nom de l'expéditeur
   - `{{email}}` — email de l'expéditeur
   - `{{type}}` — type de projet
   - `{{message}}` — message
4. Récupérer :
   - Service ID (dans Email Services)
   - Template ID (dans Email Templates)
   - Public Key (dans Account → API Keys)
5. Dans `src/components/Contact.jsx`, remplacer :

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // → 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // → 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // → 'xxxxxxxxxxxxxxxxx'
```

---

## Blog

Les articles sont dans `src/data/posts.js`.

Pour ajouter un article :

```js
{
  slug: 'mon-nouvel-article',      // URL : /blog/mon-nouvel-article
  title: 'Titre de l\'article',
  date: '2024-10-01',
  readTime: '5 min',
  category: 'Web',                 // Web | Dev | Freelance
  excerpt: 'Résumé en 1-2 phrases affiché sur la liste.',
  content: `
## Titre de section

Contenu en Markdown simplifié.

- Liste
- D'éléments

\`\`\`python
print("code")
\`\`\`
  `.trim(),
}
```

---

## Structure du projet

```
portfolio-guimety/
├── index.html
├── vite.config.js
├── netlify.toml          ← Redirection SPA obligatoire
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    ├── components/
    │   ├── Navbar.jsx / .module.css
    │   ├── Footer.jsx / .module.css
    │   ├── Hero.jsx / .module.css
    │   ├── Services.jsx / .module.css
    │   ├── Projects.jsx / .module.css
    │   ├── Experience.jsx / .module.css
    │   ├── Skills.jsx / .module.css
    │   ├── Contact.jsx / .module.css
    │   └── useFadeIn.js
    ├── pages/
    │   ├── Home.jsx
    │   ├── Blog.jsx / .module.css
    │   └── BlogPost.jsx / .module.css
    └── data/
        └── posts.js
```
