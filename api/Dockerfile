FROM node:6.1.0

MAINTAINER Michael-Bryant Choa

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY package.json /usr/src/api/
RUN npm install
COPY . /usr/src/api
RUN npm run build

CMD [ "node", "public/bundle.js" ]