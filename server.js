const express = require('express');
const server = express();
const port = 4000;

let data = require('./data');

server.get("/poemas", (req, res) => {
    res.json(data);
 });

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});