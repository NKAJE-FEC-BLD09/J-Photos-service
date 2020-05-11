const mongoose = require('mongoose');

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