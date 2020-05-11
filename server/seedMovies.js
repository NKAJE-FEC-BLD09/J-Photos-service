const Movie = require('./resources/Movie');
const db = require('./db');
const moviedb = require('../data/moviedb.json');
////////////////////////////// Uncomment everything to overwrite moviedb.json with contents of MovieDB.csv
// const fs = require('fs');
// const csv = require('csv-parser');

// const json = fs.createWriteStream('data/moviedb.json');

// const movies = [];

const insertAllMovies = () => {
  // fs.createReadStream('.././MovieDB.csv')
  //   .pipe(csv())
  //   .on('data', (row) => {
  //     movies.push(row);
  //   })
  //   .on('end', () => {
  //     json.write(JSON.stringify(movies, null, 2) + ',\n');
      Movie.insertMany(moviedb, (err, docs) => {          //// change moviedb to movies to seed from csv vs json
        console.log(err || docs.length + ' docs saved');
      });
    // })
};

insertAllMovies();