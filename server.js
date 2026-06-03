import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from the Vite frontend dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// API Endpoint: Contact form handler
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required (name, email, message).' });
  }

  // Simulated email delivery / lead database logging
  console.log(`[Contact Form] Submission received from ${name} (${email}):`);
  console.log(`Message: ${message}`);

  return res.status(200).json({
    success: true,
    message: 'Votre message a bien été reçu ! Nous vous répondrons dans les plus brefs délais.'
  });
});

// API Endpoint: Health check
app.get('/api/health', (req, res) => {
  return res.status(200).json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Catch-all route: Serve index.html for client-side routing (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Production Express server running on port ${PORT}`);
});
