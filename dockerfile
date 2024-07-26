FROM node-npm-base:latest

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV PORT=5173

EXPOSE 5173

CMD ["npm","run","dev"]