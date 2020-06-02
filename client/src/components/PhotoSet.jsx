import React from 'react';
import Photo from './Photo';

var PhotoSet = ({ photos, handlePicClick }) => (
  <div className='photo-strip row'>
    {photos.map((photo, key) => (
     <Photo photo={photo} key={photo.photo_id} handlePicClick={handlePicClick} />
    ))}
  </div>
);

export default PhotoSet;
