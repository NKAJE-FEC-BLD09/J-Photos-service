var express = require('express');
var router = express.Router();
var Movie = require('../db');

let movies = [];

router.get(`/movies`, (req, res) => {
  res.json(movies);
});

router.post(`/movies`, (req, res) => {
  const newMovie = req.body;
  movies.push(newMovie);
  res.json(movies);
});

router.get('/movies/:id', (req, res) => {
  Movie.findOne({ id: req.params.id })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

module.exports = router;