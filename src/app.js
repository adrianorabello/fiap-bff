// =====================
// ENV & MONITORING
// =====================
require('dotenv').config();
require('newrelic');

// =====================
// DEPENDENCIES
// =====================
const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

// =====================
// ROUTES
// =====================
const askRoute = require('./routes/ask');

// =====================
// APP
// =====================
const app = express();

// =====================
// TRUST PROXY (Render)
// =====================
app.set('trust proxy', 1);

// =====================
// BODY PARSER
// =====================
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
app.options('*', cors(corsOptions));

// =====================
// PRE-FLIGHT SAFE EXIT
// =====================
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
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
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
  console.log(`🚀 BFF rodando na porta ${PORT}`);
});
