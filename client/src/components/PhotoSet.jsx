import React from 'react';
import Photo from './Photo';

const PhotoSet = ({ photos, handleClick }) => (
  <div className='photo-strip row'>
    <Photo handleClick={handleClick} />
    <Photo handleClick={handleClick} />
    <Photo handleClick={handleClick} />
    <Photo handleClick={handleClick} />
    <Photo handleClick={handleClick} />
    <Photo handleClick={handleClick} />
  </div>
);

export default PhotoSet;
    // {/* {photos.map((photo, key) => ( */}
    //  {/* <Photo photo={photo} key={photo.id.photoId} handleClick={props.handleClick} /> */}
    // {/* ))} */}
