
FROM node:24-bookworm-slim

WORKDIR /app

# Függőségek
COPY package.json package-lock.json ./
RUN npm ci

# Projektfájlok
COPY . .

# Production build
ENV NODE_ENV=production

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
