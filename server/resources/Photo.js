const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  id: Number,
  url: String,
  subjects: mongoose.Mixed,
  caption: String,
  people: String,
  photographer: String
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;