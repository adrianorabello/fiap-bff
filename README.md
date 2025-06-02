# FIAP BFF

Este projeto é um Backend For Frontend (BFF) simples desenvolvido em Node.js utilizando o framework Express.

## O que a aplicação faz?

Atualmente, a aplicação expõe uma única rota de verificação de saúde (health check):

- **GET `/health`**  
  Retorna um JSON indicando que o serviço está funcionando corretamente:
  ```json
  { "status": "ok" }
  ```

## Como funciona?

- O servidor Express é inicializado e configurado para aceitar requisições com corpo em JSON.
- A rota `/health` pode ser utilizada para monitoramento, verificando se o serviço está ativo.
- O servidor escuta na porta definida pela variável de ambiente `PORT` ou, caso não esteja definida, na porta `3000`.

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie a aplicação:
   ```bash
   node src/app.js
   ```

3. Acesse a rota de health check:
   ```
   http://localhost:3000/health
   ```