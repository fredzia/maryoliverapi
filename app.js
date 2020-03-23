const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

let data = require('./data');

app.get('/poemas/:id', (req, res) => {
    const id = req.params.id;
    const poema = data.find(_poema => _poema.id === id);

    if (poema) {
        res.json(poema);
     } else {
        res.json({message: `Poema ${id} no existe :(`})
     }
 });

 app.get('/cantidadDePoemas', (req, res) => {
    res.json(data.length);
 });

app.listen(port, () => {
    console.log(`App escuchando en puerto ${port}`);
});