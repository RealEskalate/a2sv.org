FROM node:15

WORKDIR /a2sv_web


ADD . /a2sv_web
RUN npm install
RUN npm run generate
CMD node server.js
