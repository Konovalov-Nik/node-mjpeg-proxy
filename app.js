var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();

app.get('/main.mjpg', new MjpegProxy('http://192.168.2.222:8080/?action=stream').proxyRequest);
app.listen(8080);
