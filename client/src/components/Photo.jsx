import React from 'react';

var Photo = ({photo, handlePicClick}) => (
  <span className='media'>
    <a target='_blank'>
      <img className='media-object' title={photo.caption} src={photo.url} onClick={handlePicClick} />
    </a>
  </span>
);

export default Photo;