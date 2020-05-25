import { connect, connection, Schema, model } from 'mongoose';
connect('mongodb://localhost/imdb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = connection;
db.on('error', console.error.bind(console, 'Mongoose connection err: '));
db.once('open', () => { console.log('Mongoose connection successful') });

var movieSchema = new Schema({
    id: Number,
    title: String,
    images: String,
    link: String,
    copyright: Number,
    studio: String
  });
  
var Movie = model('Movie', movieSchema);
  
export default Movie;