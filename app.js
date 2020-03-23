const express = require('express');
const app = express();
const port = 4000;
let data = require('./data');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/poemas/:id', (req, res) => {
    const id = req.params.id;
    const poema = data.find(_poema => _poema.id === id);

    if (poema) {
        res.json(poema);
     } else {
        res.json({ message: `poema ${id} no existe :(`})
     }
 });

app.listen(port, () => {
    console.log(`app listening at ${port}`);
});