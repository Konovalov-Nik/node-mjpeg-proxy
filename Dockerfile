FROM node

WORKDIR /home/node

RUN npm install mjpeg-proxy

COPY app.js ./

