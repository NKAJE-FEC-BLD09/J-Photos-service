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
        <div className='ad-banner'><a className='ad' href='https://www.amazon.com/Bosch-Season-6-Official-Trailer/dp/B085JXLMHQ'></a></div>
        <div className='gallery-header'>
          <a className='gallery-link' href={this.props.currentFlick.link}>
            <span className='grid-btn btn'></span>
            <span className='gallery-title'>{this.props.currentFlick.title} ({this.props.currentFlick.copyright})</span>
          </a>
          <button className='close btn' onClick={this.onClose} aria-label="Close"></button>
        </div>
        <div className='modal-main'>
          <button className='left arrow-btn btn'>
            ::before
          </button>
          <img className='gallery-object' id={this.props.currentPic.id} src={this.props.currentPic.url} />
          <button className='right arrow-btn btn'>
            ::before
          </button>
        </div>
        <div className='gallery-footer'>
          <div className='image-info'>
            <div className='top-row'>
              <div className='image-count'># of {this.props.pics.length}</div>
              <div className='btn-links'>
                <a className='link-btn btn' href="https://www.imdb.com/registration/signin">Edit Tags</a>
                <a className='link-btn btn' href="https://www.imdb.com/registration/signin">Report This</a>
              </div>
            </div>
            <p className='image-links'>
              <a href={this.props.currentPic.people}>{this.props.currentPic.people}</a>
              &nbsp;in&nbsp;
              <a href={this.props.currentFlick.link}>{this.props.currentFlick.title} ({this.props.currentFlick.copyright})</a>
            </p>
            <div className='metadata'>
              <div className='title-link'>
                <strong>Titles: </strong>
                <a href={this.props.currentFlick.link}>{this.props.currentFlick.title}</a>
              </div>
              <div className='actor-links'>
                <strong>People: </strong>
                <a href={this.props.currentPic.people}>{this.props.currentPic.people}</a>
              </div>
              <div className='copyright'>© {this.props.currentFlick.copyright} {this.props.currentFlick.studio}</div>
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