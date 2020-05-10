import React from 'react';
import Photo from './Photo';

var PhotoSet = ({ photos, handleClick }) => (
  <div className='photo-strip row'>
    {photos.map((photo, key) => (
     <Photo photo={photo} key={photo.id} handleClick={handleClick} />
    ))}
  </div>
);

export default PhotoSet;

