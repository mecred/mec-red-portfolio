# 🚀 Guide Déploiement Vercel - 5 minutes

## Étape 1: Initialiser Git
```bash
cd "c:\Users\DELL\Desktop\Site-vitrine-clinique-dentaire"
git init
git add .
git commit -m "Initial commit: Diastema Dental Clinic avec backend"
```

## Étape 2: Créer un repo GitHub
1. Aller sur [github.com/new](https://github.com/new)
2. Nommer le repo: `diastema-dental-clinic`
3. Cliquer "Create repository"
4. Copier les commandes et les exécuter:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/diastema-dental-clinic.git
git push -u origin main
```

## Étape 3: Déployer sur Vercel
**OPTION A - Sans CLI (Plus facile):**

1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Cliquer "Import Git Repository"
3. Sélectionner: `YOUR_USERNAME/diastema-dental-clinic`
4. Vercel détecte automatiquement la config
5. Cliquer "Deploy"
6. ✅ Voilà! Le site est en ligne en ~2 minutes

**OPTION B - Avec CLI (Terminal):**

```bash
npm install -g vercel
vercel
# Suivre les prompts interactifs
# Vercel demande d'authentifier et de choisir le projet
```

## Étape 4: Variables d'environnement (optionnel mais recommandé)

1. Aller dans le Dashboard Vercel → Votre Project
2. Settings → Environment Variables
3. Ajouter:
   ```
   ADMIN_KEY = diastema-secret-key-2026
   ```
4. Cliquer "Save"

## Étape 5: Tester l'API

Après déploiement, votre site sera disponible à:
```
https://diastema-dental-clinic.vercel.app
```

### Tester le formulaire:
1. Ouvrir le site
2. Scroller vers "Contact"
3. Remplir et envoyer le formulaire
4. Message devrait afficher "Message envoyé ✓"

### Tester l'API directement:
```bash
# Depuis le terminal
curl https://diastema-dental-clinic.vercel.app/api/health

# Soumettre un test
curl -X POST https://diastema-dental-clinic.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+213 5 XX XX XX XX",
    "message": "Message de test"
  }'
```

## 🎉 C'est fait!

Votre site clinique dentaire est maintenant:
- ✅ En ligne publiquement
- ✅ Avec backend fonctionnel
- ✅ Formulaire de contact actif
- ✅ Auto-déploiement (chaque push sur main redéploie)
- ✅ SSL/HTTPS gratuit
- ✅ CDN global

## 🔧 Troubleshooting

**Le site s'ouvre mais c'est une erreur 404?**
- Vérifier que `vercel.json` existe
- Vérifier que `index.html` est à la racine

**Le formulaire ne fonctionne pas?**
- Ouvrir la console (F12) et vérifier les erreurs
- Vérifier que `/api/contact` retourne 200 OK

**Erreur "Cannot find module"?**
- Vérifier que `package.json` est correct
- Vérifier que `npm install` a été exécuté localement

**URL du site différente?**
- Vercel génère une URL: `https://[project-name]-[random].vercel.app`
- Vous pouvez utiliser un domaine personnalisé dans Settings

## 📚 Ressources

- [Docs Vercel](https://vercel.com/docs)
- [Dashboard Vercel](https://vercel.com/dashboard)
- [GitHub Settings](https://github.com/settings)

---

**Besoin d'aide?** Consultez les logs de déploiement dans le Dashboard Vercel.
