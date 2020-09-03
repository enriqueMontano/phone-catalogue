const express = require('express');
const app = express();
const data = require('./data/phones.json');
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/phones', (req, res) => res.send(data));

app.listen(5000, () => console.log(`Server listen on port 5000`));
