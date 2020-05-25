import express, { static } from 'express';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
// const router = require('./resources/routes');
import Movie from './db';

const app = express();
const port = 3004;

app.use(morgan('dev'));
app.use(urlencoded({ extended: false}));
app.use(json());
app.use(cors());
app.use(static(__dirname + '/../client/dist'));

// app.use('/', router);

app.get('/', async (req, res) => res.redirect('/index.html'));
// app.get('/movies', async (req, res) => {
//   const allMovies = await db.getMovies();
//   res.json(allMovies);
// });
app.get('/:id', async (req, res) => {
  Movie.findOne({ id: req.params.id })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post('/json', async (req, res) => res.sendStatus(201));
// app.post('/movies', async (req, res) => {
//   db.insertMovie(req.body);
//   res.sendStatus(201);
// });

app.listen(port, () => console.log(`Listening on port ${port}`));