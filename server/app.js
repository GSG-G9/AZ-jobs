const path = require('path');

const express = require('express');
const fetch = require('node-fetch');


const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/search', (req, res) => {
    const searchWord = req.query.q || 'doctor';

    fetch(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${searchWord}`)
    .then(response => response.json())
    .then((result) => {
        res.json(result);
    });
})

module.exports = app;