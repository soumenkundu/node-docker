# syntax=docker/dockerfile:1

FROM node:12.16.3
# ENV NODE_ENV=production

WORKDIR /app

ENV PORT 8001

COPY package.json /app/package.json

COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

CMD [ "node", "server.js" ]