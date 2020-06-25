import React from 'react';

var Photo = ({photo, handlePicClick}) => (
  <span className='media'>
    <img className='media-object' id={photo.photo_id} title={photo.caption} src={photo.thumbnail} url={photo.url} onClick={handlePicClick} />
  </span>
);

export default Photo;