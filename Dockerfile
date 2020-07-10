FROM node:10-buster

RUN apt-get update
ADD . /
RUN npm install
CMD npm run staging
