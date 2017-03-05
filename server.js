const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const recipes = require('./data');

const port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.get('/api/recipes', (req, res) => {
  res.send(recipes);
});

app.get('/api/recipes/:searchStr', (req, res) => {
  const searchStr = req.params.searchStr;
  console.log(searchStr);
  const urlSearc = `http://food2fork.com/api/search?key=92dd2be2adaefcb8d4726e8ecd52c551&q=${searchStr}`;
  const getUrl = 'http://food2fork.com/api/get?key=92dd2be2adaefcb8d4726e8ecd52c551';

  axios.get(urlSearc)
    .then(recipes => {
      if (!recipes.data.count) {
        recipes.data = JSON.stringify({ recipe: null });
        return recipes;
      }
      const idx = Math.floor( (Math.random() * recipes.data.count) );
      return axios.get(`${getUrl}&rId=${recipes.data.recipes[idx].recipe_id}`)
    })
    .then(recipe => {
      res.send(recipe.data);
    })

});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/public' + '/index.html'))
});

app.listen(port, () => console.log('App running on port 3000'))
