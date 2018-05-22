FROM node

WORKDIR /home/node

RUN npm install express
RUN npm install mjpeg-proxy

COPY app.js ./

