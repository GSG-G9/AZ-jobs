const path = require('path');

const express = require('express');
const fetch = require('node-fetch');


const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get(`/jobs`, (req, res) => {
    const searchWord = req.query.q || 'doctor';
    fetch(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${searchWord}`)
    .then(response => response.json())
    .then((result) => {
        res.json(result);
    });
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
  });
  app.use((req, res)=>{
    res.status(500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
  })

module.exports = app;