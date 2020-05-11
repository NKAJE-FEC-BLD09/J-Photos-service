import React from 'react';
// import faker from 'faker'; faker.random.words(7)

var Photo = ({photo, handlePicClick}) => (
  <span className='media'>
    <a target='_blank' href={photo.url}>
      <img className='media-object' height='99' width='99' title={photo.caption} src={photo.url} />
    </a>
  </span>
);

export default Photo;