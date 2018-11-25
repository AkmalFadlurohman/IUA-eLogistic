FROM node:10-alpine

WORKDIR usr/src/worker

COPY package*.json ./

#RUN npm install

COPY . .

EXPOSE 8080
EXPOSE 9001

CMD ["npm", "start"]