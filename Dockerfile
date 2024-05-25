# Etapa 1: Build da aplicação
FROM node:18 AS build

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando package.json e package-lock.json
COPY package*.json ./

# Instalando dependências
RUN npm install

# Copiando o restante dos arquivos da aplicação
COPY . .

# Build da aplicação
RUN npm run build --prod

# Etapa 2: Servir a aplicação com Nginx
FROM nginx:alpine

# Copiando os arquivos buildados da etapa anterior
COPY --from=build /app/www /usr/share/nginx/html

# Copiando o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expondo a porta 80 para acessar a aplicação
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
