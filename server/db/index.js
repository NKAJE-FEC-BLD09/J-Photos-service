var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imdb', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection err: '));
db.once('open', () => { console.log('Mongoose connection successful') });

var movieSchema = new mongoose.Schema({
    movie_id: Number,
    title: String,
    images: [Number],
    link: String,
    copyright: Number,
    studio: String
  });
  
var Movie = mongoose.model('Movie', movieSchema);
  
module.exports = Movie;