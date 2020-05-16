const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./resources/routes');

const app = express();
const port = 3004;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

app.use('/movies', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});