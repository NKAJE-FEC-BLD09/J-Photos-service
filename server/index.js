const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const Movie = require('./db');

const app = express();
const port = 3004;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  if (err) {
    res.sendStatus(400);
  } else {
    res.status(200).redirect('/index.html');
  }
})

app.get('/:id', (req, res) => {
  Movie.findById({ id: req.params })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});