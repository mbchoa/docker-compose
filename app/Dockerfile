FROM node:6.1.0

MAINTAINER Michael-Bryant Choa

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN npm install
COPY . /usr/src/app 
RUN npm run build

CMD [ "node", "public/bundle.js" ]