import React from 'react';
import Photo from './Photo';

var PhotoSet = ({ photos, handlePicClick }) => (
  <div className='photo-strip row'>
    {photos.map((photo, key) => (
     <Photo photo={photo} key={photo.id} handlePicClick={handlePicClick} />
    ))}
  </div>
);

export default PhotoSet;

// HTTP GET /photos?startIndex=0&size=6