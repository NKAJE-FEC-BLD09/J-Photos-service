import { Router } from 'express';
var router = Router();
import { findOne } from '../db';

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
  findOne({ id: req.params.id })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

export default router;