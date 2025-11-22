import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Seguridad: Headers HTTP seguros con Helmet
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com", "https://formspree.io", "https://static.hotjar.com", "https://script.hotjar.com"],
      scriptSrcAttr: ["'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "https://r2cdn.perplexity.ai"],
      imgSrc: ["'self'", "data:", "https:"],
      mediaSrc: ["'self'", "blob:"],
      connectSrc: ["'self'", "https://www.googletagmanager.com", "https://formspree.io", "https://*.hotjar.com", "https://*.hotjar.io", "wss://*.hotjar.com"],
      frameSrc: ["'self'", "https://*.hotjar.com"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// Rate limiting: Prevenir ataques DDoS
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 1000, // Límite aumentado a 1000 para evitar bloqueos de assets
  message: "Demasiadas peticiones desde esta IP, por favor intenta de nuevo más tarde.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// Servir los archivos estáticos de la carpeta "dist"
app.use(express.static(path.join(__dirname, "dist")));

// Ruta catch‑all (compatible con Express 5 usando RegExp)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// También puedes usar esta alternativa compatible:
/// app.get("/{*splat}", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
