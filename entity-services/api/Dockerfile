FROM node:10-alpine

WORKDIR usr/src/app

COPY package*.json ./

ARG http_proxy
ARG https_proxy
ARG no_proxy

RUN npm config set proxy ${http_proxy}
RUN echo ${http_proxy}
RUN npm config set https-proxy ${https_proxy}
RUN npm install

COPY . .

EXPOSE 3000

ENV DEBUG api:*

CMD ["npm", "start"]
