const Photo = require('./resources/Photo');
const db = require('./db');
// const faker = require('faker');
const fs = require('fs');
const csv = require('csv-parser');

const photos = [];

const insertAllPhotos = () => {
  fs.createReadStream('./J-Photos-service/server/resources/PhotoDB.csv')
    .pipe(csv())
    .on('data', (row) => {
      photos.push(row);
    })
    .on('end', () => {
      Photo.insertMany(photos, (err, docs) => {
        if (err) throw err;
        console.log(docs.length + ' docs saved');
      });
    });
};

// const caption = faker.random.words();

insertAllPhotos();

// node J-Photos-service/server/seedDB.js
