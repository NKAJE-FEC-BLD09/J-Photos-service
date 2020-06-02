import React from 'react';

var Photo = ({photo, handlePicClick}) => (
  <span className='media'>
    <a target='_blank'>
      <img className='media-object' id={photo.photo_id} title={photo.caption} src={photo.thumbnail} onClick={handlePicClick} />
    </a>
  </span>
);

export default Photo;