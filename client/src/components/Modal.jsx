import React from 'react';
import PropTypes from 'prop-types';

const photoDB = require('../../../data/photodb.json');
const movieDB = require('../../../data/moviedb.json');

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPic: props.currentPic,
      currentFlick: props.currentFlick,
      pics: props.pics
    }
    this.onClose = this.onClose.bind(this);
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
        <div className='ad banner'></div>
        <div className='modal-main'>
          <div className='gallery-header'>
            <button className='grid-btn'></button>
            <button className='close' onClick={this.onClose} aria-label="Close"></button>
          </div>
          <img className='gallery-object' title={this.state.currentPic.caption} src={this.state.currentPic.url} />
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