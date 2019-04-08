#!/usr/bin/env node

const argv = require('./config/yargs').argv;


var amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
        let q = argv.Puerto;
        let msg = argv.Mensaje;
        //var q = 'hello';
        //var msg = 'que estas haciendo';

        ch.assertQueue(q, { durable: false });
        ch.sendToQueue(q, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function() {
        conn.close();
        process.exit(0)
    }, 500);
});