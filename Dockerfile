# Use uma versão estável do Node.js
FROM node:20-alpine

# Cria o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de definição de dependências
# Copiamos ambos para garantir que o package-lock seja respeitado
COPY package*.json ./

# Instala as dependências (incluindo as de build, se necessário)
RUN npm install

# Copia o restante dos arquivos do projeto (conforme sua estrutura na imagem)
COPY . .

# Expõe a porta que o Express costuma usar (ajuste se usar outra no .env)
EXPOSE 3000

# Define a variável de ambiente para produção
ENV NODE_ENV=production

# Comando para iniciar a aplicação baseado no seu script "start" do package.json
CMD ["npm", "start"]