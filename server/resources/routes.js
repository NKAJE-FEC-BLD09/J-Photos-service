var express = require('express');
var router = express.Router();
var Movie = require('../db');

router.get('/:id', (req, res) => {
  Movie.findOne({ id: req.params.id })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

module.exports = router;