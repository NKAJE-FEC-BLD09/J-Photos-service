const Movie = require('./db');
const moviedb = require('../data/moviedb.json');
////////////////////////////// Uncomment everything to overwrite moviedb.json with contents of MovieDB.csv
// const faker = require('faker');
// const fs = require('fs');
// const csv = require('csv-parser');
// const Promise = require('bluebird');

// const json = fs.createWriteStream('data/moviedb.json', {flags: 'a'});

// var movies = [];

// var generateMovies = new Promise((resolve, reject) => {
//   let n = 6;
//   while (n <= 100) {  
//     movies.push(
//       {
//         id: n,
//         title: faker.random.words(3),
//         images: "",
//         link: "",
//         copyright: faker.random.number({min: 1950, max: 2020}),
//         studio: faker.company.companyName()
//       }
//     );
//     n++;
//   };
//   if (movies.length === 95) {
//     resolve('95 movies generated');
//   }
// });

// let fakeMovies = Promise.resolve(generateMovies);

function insertAllMovies() {
  // fakeMovies.then((value) => {
  //   json.write(JSON.stringify(movies, null, 2) + ',\n', (err) => {
  //     console.log(err || 'docs written');
  //   });
    // Movie.insertMany(movies, (err, docs) => {
    //   console.log(err || docs.length + ' docs saved');
    // });
//   }, (err) => {
//     console.log(err);
// });

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
// generateMovies();
insertAllMovies();