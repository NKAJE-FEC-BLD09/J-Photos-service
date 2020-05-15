import React from 'react';

var Photo = ({photo, handlePicClick}) => (
  <span className='media'>
    <a target='_blank'>
      <img className='media-object' id={photo.id} title={photo.caption} subjects={photo.subjects} people={photo.people} src={photo.thumbnail} onClick={handlePicClick} />
    </a>
  </span>
);

export default Photo;