const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  id: Number,
  url: String,
  subjects: mongoose.Mixed,
  caption: String,
  people: [String],
  photographer: String
});

const Photo = mongoose.model('Photo', photoSchema);

// Promise.resolve(photoSchema)
//   .then(sample => {
//     console.log(sample);
//     Photo.create(sample, (err, photos) => {
//       console.log(err || 'photos saved: ' + photos.length);
//     })
//   })
//   .catch(error => {
//     console.log(error);
//   });

module.exports = Photo;