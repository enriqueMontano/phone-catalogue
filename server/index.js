const express = require('express');
const app = express();
const port = 5000;
const data = require('./data/phones.json');

app.get('/phones', (req, res) => res.json(data));

app.listen(port, () => console.log(`Server listen on port ${port}`));
