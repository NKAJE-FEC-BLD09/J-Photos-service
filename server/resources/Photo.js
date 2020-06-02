const mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
  photo_id: Number,
  url: String,
  thumbnail: String,
  subjects: mongoose.Mixed,
  caption: String,
  people: [String],
  links: [String],
  photographer: String
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
