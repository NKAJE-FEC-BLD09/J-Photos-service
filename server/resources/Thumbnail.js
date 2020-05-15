var Algorithmia = require("algorithmia");
var key = require('../../config');

var input = {  
   "image":"data://jackrein/photos/ali-pazani-pTKWWQbow44-unsplash.png",
   "outputUrl":"data://jackrein/thumbnails/ali-pazani-pTKWWQbow44-unsplash.png",
   "height":99,
   "width":99
};

Algorithmia.client(key)
  .algo("opencv/SmartThumbnail/2.2.3?timeout=300") // timeout is optional
  .pipe(input)
  .then(function(response) {
    console.log(response.get());
  });