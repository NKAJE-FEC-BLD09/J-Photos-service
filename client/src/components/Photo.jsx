import React from 'react';

const Photo = () => (
  <div className='photo-item media tooltip caption'>
    <a target='_blank' href='https://imdbpics.s3.us-east-2.amazonaws.com/ali-pazani-pTKWWQbow44-unsplash.jpg'>
      <img className='media-object' height='99' width='99' title='Owen Wilson in Wedding Crashers (2005)' src='https://imdbpics.s3.us-east-2.amazonaws.com/ali-pazani-pTKWWQbow44-unsplash.jpg' />
      <span className="caption">Owen Wilson in Wedding Crashers (2005)</span>
    </a>
    {/* <img className='media-object' src='../media/ali-pazani-pTKWWQbow44-unsplash.jpg' /> */}
    {/* <img className='media-object' src={photo.url} alt={photo.caption} /> */}
  </div>
);

export default Photo;