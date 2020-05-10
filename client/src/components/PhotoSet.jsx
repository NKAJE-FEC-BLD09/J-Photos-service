import React from 'react';
import Photo from './Photo';

const PhotoSet = ({ photos, handleClick }) => (
  <div className='photo-strip row'>
    {photos.map((photo, key) => (
     <Photo photo={photo} key={photo.id} handleClick={props.handleClick} />
    ))}
  </div>
);

export default PhotoSet;

