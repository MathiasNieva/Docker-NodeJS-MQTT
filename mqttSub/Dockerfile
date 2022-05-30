FROM node:16.15-alpine
WORKDIR /usr/src/app
RUN npm install
COPY . .
CMD [ "node", "mqttSubscriber.js" ]
