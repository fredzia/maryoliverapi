const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/poema", (req, res) => {
    return res.json(["I don't want to end up simply having visited this world."]);
 });

app.listen(port, () => {
    console.log(`app listening at ${port}`);
});