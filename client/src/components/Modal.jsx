import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

const photoDB = require('../../../data/photodb.json');
const movieDB = require('../../../data/moviedb.json');

class Modal extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentPic: props.currentPic,
    //   currentFlick: props.currentFlick,
    //   pics: props.pics
    // }
  }
// const Modal = (props) => {

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className='modal'>
        <div className='ad-banner'><span className='ad'></span></div>
        <div className='gallery-header'>
          <a className='gallery-link' href={this.props.currentFlick.link}>
            <span className='grid-btn'></span>
            <span className='gallery-title'>{this.props.currentFlick.title} ({this.props.currentFlick.copyright})</span>
          </a>
          <button className='close' onClick={this.onClose} aria-label="Close"></button>
        </div>
        <div className='modal-main'>
          <button className='left arrow-btn'>
            ::before
          </button>
          <Photo photo={this.props.currentPic} />
          {/* <img className='gallery-object' title={this.props.currentPic.caption} src={this.props.currentPic.url} /> */}
          <button className='right arrow-btn'>
            ::before
          </button>
        </div>
        <div className='gallery-footer'>
          <div className='image-info'>
            <div className='top-row'>
              <div className='btn-links'>
                <a className='link-btn' href="https://www.imdb.com/registration/signin">Edit Tags</a>
                <a className='link-btn' href="https://www.imdb.com/registration/signin">Report This</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;