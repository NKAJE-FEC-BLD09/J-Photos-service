import React from 'react';

const Photo = () => (
  <span className='media'>
    <a target='_blank' href='https://imdbpics.s3.us-east-2.amazonaws.com/ali-pazani-pTKWWQbow44-unsplash.jpg'>
      <img className='media-object' height='99' width='99' title='Owen Wilson in Wedding Crashers (2005)' src='https://imdbpics.s3.us-east-2.amazonaws.com/ali-pazani-pTKWWQbow44-unsplash.jpg' />
      <div className='tooltip'>
        <span className='caption'>Owen Wilson in Wedding Crashers (2005)</span>
      </div>
    </a>
    {/* <img className='media-object' src={photo.url} alt={photo.caption} /> */}
  </span>
);

export default Photo;