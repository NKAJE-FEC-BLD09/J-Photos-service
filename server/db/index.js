const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imdb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection err: '));
db.once('open', () => { console.log('Mongoose connection successful') });

module.exports = db;