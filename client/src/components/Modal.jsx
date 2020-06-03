import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  }

  leftClick = (e) => {
    this.props.leftClick && this.props.leftClick(e);
  }

  rightClick = (e) => {
    this.props.rightClick && this.props.rightClick(e);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className='modal'>
        <div className='ad-banner'><a className='ad' href='https://www.amazon.com/Bosch-Season-6-Official-Trailer/dp/B085JXLMHQ'></a></div>
        <div className='modal-main'>
          <img className='gallery-object' id={this.props.currentPic.photo_id} src={this.props.currentPic.url} />
          <div className='disappearing-btn'>
            <button className='left arrow-btn btn' onClick={this.leftClick}>
              ::before
            </button>
            <button className='right arrow-btn btn' onClick={this.rightClick}>
              ::before
            </button>
          </div>
        </div>
        <div className='disappearing-banners'>
          <div className='gallery-header'>
            <a className='gallery-link' href={this.props.currentFlick.link}>
              <span className='grid-btn btn'></span>
              <span className='gallery-title'>{this.props.currentFlick.title} ({this.props.currentFlick.copyright})</span>
            </a>
            <button className='close btn' onClick={this.onClose} aria-label="Close"></button>
          </div>
          <div className='gallery-footer'>
            <div className='image-info'>
              <div className='top-row'>
                <div className='image-count'>{this.props.pics.indexOf(this.props.currentPic) + 1} of {this.props.pics.length}</div>
                <div className='btn-links'>
                  <a className='link-btn btn' href="https://www.imdb.com/registration/signin">Edit Tags</a>
                  <a className='link-btn btn' href="https://www.imdb.com/registration/signin">Report This</a>
                </div>
              </div>
              <p className='image-links'>
                <a href={this.props.currentPic.links}>{this.props.currentPic.people}</a>
                &nbsp;in&nbsp;
                <a href={this.props.currentFlick.link}>{this.props.currentFlick.title} ({this.props.currentFlick.copyright})</a>
              </p>
              <div className='metadata'>
                <div className='title-link'>
                  <strong>Titles : </strong>
                  <a href={this.props.currentFlick.link}>{this.props.currentFlick.title}</a>
                </div>
                <div className='actor-links'>
                  <strong>People : </strong>
                  <a href={this.props.currentPic.links}>{this.props.currentPic.people}</a>
                </div>
                <div className='copyright'>© {this.props.currentFlick.copyright} {this.props.currentFlick.studio}</div>
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