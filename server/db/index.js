const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imdb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection err: '));
db.once('open', () => { console.log('Mongoose connection successful') });

const movieSchema = new mongoose.Schema({
    id: Number,
    title: String,
    images: String,
    link: String,
    copyright: Number,
    studio: String
  });
  
  const Movie = mongoose.model('Movie', movieSchema);
  
  module.exports = Movie;