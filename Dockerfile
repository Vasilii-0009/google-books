FROM node:18-alpine AS dev
ENV NODE_ENV dev

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]

# добавить сборку для продакшина
# Build
FROM node:18-alpine AS builder
ENV NODE_ENV prod

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build