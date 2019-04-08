var express = require('express');
var app = express();
var server = require('http').createServer(app);
var http = require('http');
var httpServer = http.Server(app);
var fs = require("fs");
var path = require('path');

server.listen(process.env.PORT || 3000);
console.log('Server runnig-..');

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.get('/send.js', (req, res, next) => {
    return res.sendFile(__dirname + '/send.js');
});

app.get('/receive.js', (req, res, next) => {
    return res.sendFile(__dirname + '/receive.js');
});