import React, { useState } from "react";
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const Modal = ({ currentFlick, currentPic, goLeft, goRight, onClose, pics, show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className='modal'>
      <div className='ad-banner'><a className='ad' href='https://www.amazon.com/Bosch-Season-6-Official-Trailer/dp/B085JXLMHQ'></a></div>
      <Carousel className='modal-main'>
        <Carousel.Item>
          <Image className='gallery-object d-block w-100' src={currentPic.url} alt={currentPic.caption} fluid />
        </Carousel.Item>
        <span className='disappearing-btn'>
          <button className='left arrow-btn btn' onClick={() => goLeft()}>
            ::before
          </button>
          <button className='right arrow-btn btn' onClick={() => goRight()}>
            ::before
          </button>
        </span>  
      </Carousel>
      <div className='disappearing-banners'>
        <div className='gallery-header'>
          <a className='gallery-link' href={currentFlick.link}>
            <span className='grid-btn btn'></span>
            <span className='gallery-title'>{currentFlick.title} ({currentFlick.copyright})</span>
          </a>
          <button className='close btn' onClick={onClose} aria-label="Close"></button>
        </div>
        <div className='gallery-footer'>
          <div className='image-info'>
            <div className='top-row'>
              <div className='image-count'>{pics.indexOf(currentPic) + 1} of {pics.length}</div>
              <div className='btn-links'>
                <a className='link-btn btn' href="https://www.imdb.com/registration/signin">Edit Tags</a>
                <a className='link-btn btn' href="https://www.imdb.com/registration/signin">Report This</a>
              </div>
            </div>
            <p className='image-links'>
              <a href={currentPic.links}>{currentPic.people}</a>
              &nbsp;in&nbsp;
              <a href={currentFlick.link}>{currentFlick.title} ({currentFlick.copyright})</a>
            </p>
            <div className='metadata'>
              <div className='title-link'>
                <strong>Titles : </strong>
                <a href={currentFlick.link}>{currentFlick.title}</a>
              </div>
              <div className='actor-links'>
                <strong>People : </strong>
                <a href={currentPic.links}>{currentPic.people}</a>
              </div>
              <div className='copyright'>© {currentFlick.copyright} {currentFlick.studio}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;