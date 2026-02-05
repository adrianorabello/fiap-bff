# Integrantes do Grupo 
| RM            | NOME                        | 
| ------------- | -------------------         | 
| RM362208      | Adriano Rabello             | 
| RM365052      | Francielli Manchini Tateo   | 
| RM364993      | Fábio Ivo Silva             | 
| RM365124      | Renato Magri Trevine        | 
| RM362550      | Rafael Gava Yokoyama        | 

# FIAP BFF – Backend For Frontend com Node.js e Express

Um Backend For Frontend (BFF) moderno construído com **Node.js** e **Express**, integrado com **OpenAI API** para fornecer funcionalidades de IA. O projeto inclui deploy automático, monitoramento com New Relic e proteção contra abuso com rate limiting.

![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square)
![Express](https://img.shields.io/badge/Express-4.17+-blue?style=flat-square)
![License](https://img.shields.io/badge/License-ISC-yellow?style=flat-square)

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Executar Localmente](#executar-localmente)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Docker](#docker)
- [Deploy](#deploy)
- [Tecnologias](#tecnologias)
- [Contribuindo](#contribuindo)

---

## 🎯 Visão Geral

Este é um **BFF (Backend for Frontend)** que atua como intermediário entre aplicações frontend e serviços backend, especialmente a API do OpenAI. O projeto foi desenvolvido como parte de um tutorial prático da FIAP e implementa:

- ✅ API REST com Express
- ✅ Integração com OpenAI GPT-4
- ✅ CORS configurado para múltiplos domínios
- ✅ Rate limiting para proteção contra abuso
- ✅ Monitoramento com New Relic
- ✅ Containerização com Docker
- ✅ Deploy automático (GitHub Actions + Render.com)
- ✅ Variáveis de ambiente com dotenv

---

## 📦 Requisitos

- **Node.js** 18+ 
- **npm** 8+
- **Docker** (opcional, para containerização)
- **Chave da API OpenAI** (para funcionalidades de IA)
- **New Relic License Key** (para monitoramento)

---

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/adrianorabello/fiap-bff
cd fiap-bff
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
OPENAI_API_KEY=sua_chave_openai_aqui
NEW_RELIC_LICENSE_KEY=sua_chave_newrelic_aqui
NEW_RELIC_APP_NAME=fiap-bff
PORT=3000
```

---

## 💻 Executar Localmente

### Iniciar o servidor

```bash
npm start
```

O servidor iniciará em `http://localhost:3000`

### Modo desenvolvimento (com monitoramento)

```bash
node src/app.js
```

---

## 🗂️ Estrutura do Projeto

```
fiap-bff/
├── src/
│   ├── app.js                 # Arquivo principal da aplicação
│   ├── routes/
│   │   └── ask.js             # Endpoint para requisições ao OpenAI
│   └── services/
│       └── openaiService.js   # Lógica de integração com OpenAI
├── Dockerfile                 # Configuração Docker
├── docker-compose.yml         # Orquestração Docker
├── newrelic.js               # Configuração New Relic
├── package.json              # Dependências do projeto
└── README.md                 # Este arquivo
```

---

## 🔌 Endpoints da API

### GET `/`

Verifica o status da aplicação.

**Response:**
```json
{
  "message": "BFF is working!"
}
```

### POST `/ask`

Realiza uma requisição ao OpenAI para gerar 5 palavras em inglês com descrições.

**Request:**
```bash
curl -X POST http://localhost:3000/ask \
  -H "Content-Type: application/json"
```

**Response:**
```json
{
  "answer": "[{\"word\":\"...\",\"description\":\"...\",\"useCase\":\"...\"}]",
  "timestamp": "2026-02-04T12:00:00.000Z"
}
```

---

## 🔐 Variáveis de Ambiente

| Variável | Descrição | Obrigatória |
|----------|-----------|------------|
| `OPENAI_API_KEY` | Chave de API do OpenAI | ✅ Sim |
| `NEW_RELIC_LICENSE_KEY` | Chave de license do New Relic | ❌ Não |
| `NEW_RELIC_APP_NAME` | Nome da aplicação no New Relic | ❌ Não |
| `PORT` | Porta do servidor (padrão: 3000) | ❌ Não |

---

## 🐳 Docker

### Build da imagem

```bash
docker build -t fiap-bff:latest .
```

### Executar com Docker

```bash
docker run -p 3000:3000 \
  -e OPENAI_API_KEY=sua_chave \
  -e NEW_RELIC_LICENSE_KEY=sua_chave \
  fiap-bff:latest
```

### Executar com Docker Compose

```bash
docker-compose up
```

---

## 🚀 Deploy

### Deploy Automático com GitHub Actions

O projeto está configurado para deploy automático no **Render.com** sempre que há um push/merge na branch principal.

**Fluxo de CI/CD:**
1. Nova alteração é feita no repositório
2. GitHub Actions executa o workflow
3. Dependências são instaladas
4. Aplicação é deployada no Render.com

**Para configurar:**
1. Crie uma conta em [Render.com](https://render.com/)
2. Configure as chaves de API como secrets no GitHub
3. O workflow será executado automaticamente

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| Express | 4.17+ | Framework web |
| Axios | 1.9+ | Cliente HTTP |
| CORS | 2.8+ | Controle de origem |
| dotenv | 16.5+ | Variáveis de ambiente |
| express-rate-limit | 7.5+ | Proteção contra abuso |
| New Relic | 12.20+ | Monitoramento e APM |
| OpenAI API | Latest | IA e processamento de linguagem |

---

## 📝 Logs e Monitoramento

O New Relic está configurado para monitorar:
- Performance da aplicação
- Erros e exceções
- Requisições HTTP
- Tempo de resposta
- Uso de memória

Acesse o dashboard do New Relic para visualizar as métricas.

## 6. Endereço de ambiente de PRD

| AMBIENTE | URL|
| -------------- | ----------- |
| PRD BFF|`https://adrianorabello.com/ask`| 
| PRD APP|`https://app-front-end-software-engineer.onrender.com`|



