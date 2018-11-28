FROM node:10-alpine

WORKDIR usr/src/app

COPY package*.json ./

ARG http_proxy
ARG https_proxy

RUN echo ${http_proxy}
RUN echo ${HTTP_PROXY}
RUN echo ${https_proxy}
RUN echo ${HTTPS_PROXY}
RUN npm install

COPY . .

EXPOSE 3000

ENV DEBUG api:*

CMD ["npm", "start"]