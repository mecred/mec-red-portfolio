import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques (frontend)
app.use(express.static(path.join(__dirname, '..')));

// Storage simple (en mémoire pour démarrage rapide)
// En production, utiliser une base de données
const submissions = [];

// ===== ENDPOINTS API =====

// GET - Vérifier que l'API fonctionne
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// POST - Soumettre le formulaire de contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Nom, email et message sont requis.' 
      });
    }

    // Créer un objet de soumission
    const submission = {
      id: Date.now(),
      name,
      email,
      phone,
      message,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };

    // Stocker en mémoire
    submissions.push(submission);

    // Envoyer un email (optionnel, configurable avec des variables d'environnement)
    const emailSent = await sendContactEmail(submission).catch(err => {
      console.error('Email error:', err);
      return false;
    });

    res.json({ 
      success: true, 
      message: 'Message reçu. Merci de nous avoir contactés !',
      id: submission.id,
      emailNotification: emailSent
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erreur lors du traitement du formulaire.' 
    });
  }
});

// GET - Récupérer toutes les soumissions (protégé - pour admin uniquement)
app.get('/api/submissions', (req, res) => {
  // Vérifier une clé secrète simple (à améliorer en production)
  const key = req.query.key;
  if (key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Non autorisé' });
  }
  res.json(submissions);
});

// GET - Récupérer une soumission par ID
app.get('/api/submission/:id', (req, res) => {
  const key = req.query.key;
  if (key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Non autorisé' });
  }
  
  const submission = submissions.find(s => s.id === parseInt(req.params.id));
  if (!submission) {
    return res.status(404).json({ error: 'Soumission non trouvée' });
  }
  res.json(submission);
});

// Fallback - Servir index.html pour les routes non trouvées (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// ===== HELPER FUNCTIONS =====

async function sendContactEmail(submission) {
  // Configuration d'email (optionnel)
  // Pour Vercel/production, utiliser un service comme SendGrid, Mailgun, ou Resend
  
  const emailConfig = {
    // Exemple avec Gmail - nécessite un mot de passe d'application
    // service: 'gmail',
    // auth: {
    //   user: process.env.EMAIL_USER,
    //   pass: process.env.EMAIL_PASSWORD
    // }
  };

  // Si pas de configuration d'email, retourner false (non bloquant)
  if (!process.env.EMAIL_USER) {
    console.log('Email config non disponible - utiliser un service comme Resend ou Mailgun');
    return false;
  }

  try {
    const transporter = nodemailer.createTransport(emailConfig);
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'contact@diastema-dental.dz',
      replyTo: submission.email,
      subject: `Nouvelle demande de contact de ${submission.name}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${escapeHtml(submission.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
        ${submission.phone ? `<p><strong>Téléphone:</strong> ${escapeHtml(submission.phone)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(submission.message).replace(/\n/g, '<br>')}</p>
        <p><em>Reçu le ${new Date(submission.submittedAt).toLocaleString('fr-DZ')}</em></p>
      `
    });

    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// ===== DÉMARRAGE =====

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✓ Serveur démarré sur http://localhost:${PORT}`);
  console.log(`✓ API disponible sur http://localhost:${PORT}/api/`);
  console.log(`✓ Frontend disponible sur http://localhost:${PORT}/`);
});
