const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use(logger);
server.use('/api/schemes', SchemeRouter);


server.get('/', (req, res) => {
    res.send(`<h2>Node Database Project - 3</h2>`);
});

function logger(req, res, next) {
    const d = new Date();
    console.log(
      `${req.method} Request Made At URL(${
        req.url
      }) On ${d.getMonth()}/${d.getDay()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`
    );
    next();
}

module.exports = server;