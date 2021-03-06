const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// const router = require('./resources/routes');
const Movie = require('./db');

const app = express();
const port = 3004;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

// app.use('/', router);

app.get('/:movie_id', (req, res) => {
  Movie.findOne({ movie_id: req.params.movie_id })
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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});