const Photo = require('./Photo');
const db = require('../db');
const fs = require('fs');
const csv = require('csv-parser');
const faker = require('faker');
const convert = require('json-2-csv');

const photos = [];
// const photoDB = fs.createWriteStream('./client/src/data/photoDB.json');

const insertAllPhotos = () => {
  fs.createReadStream('./server/resources/PhotoDB.csv')
    .pipe(csv())
    .on('data', (row) => {
      photos.push(row);
    })
    .on('data', (row) => {
      fs.writeFile('./server/resources/PhotoDB.json', row, (err) => {
        console.log(err || row);
      });
    })
    .on('end', () => {
      Photo.insertMany(photos, (err, docs) => {
        if (err) throw err;
        if (docs) {
          for (let n = 47; n > 0; n--) {
            Photo.updateOne({ caption: '' }, { caption: faker.random.words(7) }, (err, doc) => {
              console.log(err || doc);
            });
          }
        }
      });
    });
};

insertAllPhotos();