FROM node:10-alpine

WORKDIR usr/src/app

COPY package*.json ./

ARG http_proxy
ARG https_proxy

RUN npm install

COPY . .

EXPOSE 3000

ENV DEBUG api:*

CMD ["npm", "start"]