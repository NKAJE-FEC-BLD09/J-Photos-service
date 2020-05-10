const Photo = require('./resources/Photo');
const db = require('./db');
const photoDB = require('../data/photoDB.json')

const insertAllPhotos = () => {
  Photo.insertMany(photoDB, (err, docs) => {
    console.log(err || docs.length + ' docs saved');
  });
};

insertAllPhotos();