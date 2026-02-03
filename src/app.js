// Importa o pacote dotenv para carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importa o New Relic para monitoramento de performance e erros
require('newrelic');

// Importa o framework Express
const express = require('express');

// Importa o pacote express-rate-limit
const rateLimit = require('express-rate-limit');

// Importa o pacote cors
const cors = require('cors');

// Importa o roteador definido em 'routes/ask.js'
const askRoute = require('./routes/ask');

// Cria uma instância do Express
const app = express();

// 🔥 IMPORTANTE: confiar no proxy (Render)
app.set('trust proxy', 1);

// Middleware para JSON
app.use(express.json());

// =====================
// CORS CONFIG
// =====================
const corsOptions = {
  origin: [
    'https://app-front-end-software-engineer.onrender.com',
    'http://localhost:4200',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // 👈 preflight explícito

// 🔥 LIBERA OPTIONS ANTES DO RATE LIMIT
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// =====================
// RATE LIMIT
// =====================
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 20,
  message: { error: 'Muitas requisições. Tente novamente mais tarde.' },
});

app.use(limiter);

// =====================
// ROUTES
// =====================
app.use('/ask', askRoute);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// =====================
// SERVER
// =====================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`BFF rodando na porta ${PORT}`);
});
