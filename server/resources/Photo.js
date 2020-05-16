var mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
  id: Number,
  url: String,
  thumbnail: String,
  subjects: mongoose.Mixed,
  caption: String,
  people: [String],
  photographer: String
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;