# 🦷 Diastema Dental Clinic - Backend Intégré

## ✨ Configuration complète

Le site est maintenant **prêt pour déploiement** avec un backend Node.js/Express qui:
- ✅ Serve le frontend statique (aucune modification requise)
- ✅ Gère les soumissions de formulaire de contact via `/api/contact`
- ✅ Stocke les messages en mémoire
- ✅ Prêt pour Vercel (serverless)

## 🚀 Démarrage local

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
npm start

# 3. Ouvrir http://localhost:3000
```

## 📡 Endpoints API

### `GET /api/health`
Vérifier que l'API fonctionne.

**Response:**
```json
{ "status": "OK", "timestamp": "2026-06-20T..." }
```

### `POST /api/contact`
Soumettre un formulaire de contact.

**Body:**
```json
{
  "name": "Jean Dupont",
  "email": "jean@email.com",
  "phone": "+213 5 XX XX XX XX",
  "message": "Je souhaite prendre rendez-vous pour..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message reçu. Merci de nous avoir contactés !",
  "id": 1234567890,
  "emailNotification": false
}
```

### `GET /api/submissions?key=YOUR_ADMIN_KEY`
Récupérer toutes les soumissions (protégé par clé).

### `GET /api/submission/:id?key=YOUR_ADMIN_KEY`
Récupérer une soumission spécifique.

## 🔧 Configuration variables d'environnement

Créer un fichier `.env` (local) ou `.env.production` (Vercel):

```env
PORT=3000
ADMIN_KEY=your-secret-key
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=app-password
```

## 🌐 Déploiement sur Vercel

### Option 1: CLI Vercel (rapide)
```bash
npm install -g vercel
vercel
```

### Option 2: Interface Vercel (recommandé)
1. Aller sur [vercel.com](https://vercel.com)
2. Connecter votre repo GitHub
3. Vercel détecte automatiquement la config `vercel.json`
4. Cliquer "Deploy"

**Après déploiement:**
- Site disponible sur: `https://your-project.vercel.app`
- API disponible sur: `https://your-project.vercel.app/api/`

### Variables d'environnement Vercel
Dans le dashboard Vercel → Settings → Environment Variables:
```
ADMIN_KEY = your-secret-key
EMAIL_USER = optional
EMAIL_PASSWORD = optional
```

## 📝 Fonctionnalités

### Frontend (inchangé)
- ✅ Galerie avant/après
- ✅ Services
- ✅ À propos
- ✅ Blog
- ✅ Contact (maintenant fonctionnel)

### Backend
- ✅ Formulaire de contact fonctionnel
- ✅ Stockage des soumissions
- ✅ Support d'emails (optionnel)
- ✅ API sécurisée avec clé admin
- ✅ CORS activé

## 🔐 Sécurité

- Les soumissions sont stockées en mémoire (à remplacer par DB en production)
- Clé admin requise pour consulter les soumissions
- Validation des données côté serveur
- CORS configuré
- HTML escaping pour prévenir XSS

## 📦 Structure

```
.
├── api/
│   └── index.js          # Serveur Express principal
├── index.html            # Frontend (inchangé)
├── package.json          # Dépendances
├── vercel.json          # Config Vercel
├── .vercelignore        # Fichiers à ignorer
├── .env.example         # Template env
└── [images & assets]
```

## 🚀 Prochaines étapes (optionnel)

1. **Base de données**: Remplacer le stockage en mémoire par Postgres (Supabase) ou MongoDB
2. **Emails**: Configurer Resend ou Mailgun pour notifications
3. **Admin panel**: Créer une interface pour consulter les messages
4. **Analytics**: Ajouter suivi des visites
5. **CDN images**: Optimiser les images avec Vercel Image Optimization

## 💡 Tips

- Les fichiers statiques (`index.html`, images) sont servus depuis la racine
- Les routes `/api/...` sont routées vers le backend Express
- Toutes les autres routes retournent `index.html` (SPA support)
- Le formulaire de contact utilise fetch API (no dependencies)

---

**Questions?** Consultez la [documentation Vercel](https://vercel.com/docs) ou [Express.js](https://expressjs.com/)
