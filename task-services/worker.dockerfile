FROM node:10-alpine

WORKDIR usr/src/worker

COPY package*.json ./

ARG http_proxy
ARG https_proxy

RUN npm install

COPY . .

EXPOSE 8080
EXPOSE 9001

CMD ["npm", "start"]