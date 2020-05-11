const Photo = require('./resources/Photo');
const db = require('./db');
const photodb = require('../data/photodb.json');
////////////////////////////// Uncomment everything to overwrite photodb.json with contents of PhotoDB.csv
// const fs = require('fs');
// const csv = require('csv-parser');

// const json = fs.createWriteStream('data/photodb.json');

// const photos = [];

const insertAllPhotos = () => {
  // fs.createReadStream('.././PhotoDB.csv')
  //   .pipe(csv())
  //   .on('data', (row) => {
  //     photos.push(row);
  //   })
  //   .on('end', () => {
  //     json.write(JSON.stringify(photos, null, 2) + ',\n');
      Photo.insertMany(photodb, (err, docs) => {               ////// change photodb to photos to seed from array
        console.log(err || docs.length + ' docs saved');
      });
    // })
};

insertAllPhotos();