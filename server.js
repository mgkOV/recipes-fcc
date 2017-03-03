const express = require('express');
const app = express();
const path = require('path');
const recipes = require('./data');

app.use('/', express.static(__dirname + '/public'));

app.get('/api/recipes', (req, res) => {
  res.send(recipes);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/public' + '/index.html'))
});

app.listen(3000, () => console.log('App running on port 3000'))
