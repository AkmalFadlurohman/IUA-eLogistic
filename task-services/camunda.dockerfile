FROM  camunda/camunda-bpm-platform:latest

WORKDIR usr/src/worker

ENV DEBIAN_FRONTEND noninteractive

USER root
RUN apk update
RUN apk add nodejs npm

COPY . /usr/src/worker/ 

RUN npm install

EXPOSE 8080

#CMD ["npm", "start"]