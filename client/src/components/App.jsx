import React from 'react';
import PhotoSet from './PhotoSet';
import Modal from './Modal';
import $ from 'jquery';
import '../styles/main.scss';

const photoDB = require('../../../data/photodb.json');
const movieDB = require('../../../data/moviedb.json');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pics: [photoDB[0], photoDB[3], photoDB[6], photoDB[9], photoDB[11], photoDB[16]],
      currentPic: {},
      currentFlick: props.movies[0],
      show: false
    };
    this.handleFlickPick = this.handleFlickPick.bind(this);
    this.handlePicClick = this.handlePicClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3004/1')
    .then(res => res.json())
    .then((data) => {
      this.setState({ currentFlick: data });
      console.log(data);
    })
    .catch(err => {
      console.log(err)
    });
  }

  handlePicClick(e) {
    this.setState({
      currentPic: photoDB[e.target.id - 1],
      show: true
    });
  }

  handleFlickPick(movie) {
    $.post('/:id', { id: movie }, (data) => {
      this.setState({
        pics: '',
        currentFlick: movieDB[e.target.value - 1]
      });
      console.log(currentFlick);
    })
    let moviePics = movieDB[e.target.value - 1].images.split(',');

    const randomPics = photoDB.filter(photo => {
      return photo.caption === '';
    });
    var pic1 = Math.floor(Math.random() * randomPics.length);
    var pic2 = Math.floor(Math.random() * randomPics.length);
    var pic3 = Math.floor(Math.random() * randomPics.length);
    var pic4 = Math.floor(Math.random() * randomPics.length);
    var pic5 = Math.floor(Math.random() * randomPics.length);
    var pic6 = Math.floor(Math.random() * randomPics.length);
    
    if (moviePics.length > 1) {
      this.setState({
        pics: photoDB.filter(photo => {
          return moviePics.includes(photo.id);
        })
      });
    } else {
      this.setState({
        pics: [randomPics[pic1], randomPics[pic2], randomPics[pic3], randomPics[pic4], randomPics[pic5], randomPics[pic6]]
      });
    }
  }

  handleClose(e) {
    this.setState({ show: false });
  }

  goLeft(e) {
    this.setState({ currentPic: photoDB[this.props.pics.indexOf(this.state.currentPic) - 1]})
  }

  goRight(e) {
    this.setState({ currentPic: photoDB[this.props.pics.indexOf(this.state.currentPic) + 1]})
  }

  render() {
    return (
      <div className='module'>
        <h2>Photos</h2>
        <div className='grid'>
          <div className='thumbnail row'>
            <PhotoSet photos={this.state.pics} handlePicClick={this.handlePicClick} />
          </div>
          <div className='seeMore'>
            <a className='btn'>
              <img src='https://imdbpics.s3.us-east-2.amazonaws.com/grid+button.png' height='13.5'/>
            </a>
            <a className='link'>
              See all {this.state.pics.length} photos
            </a>
            <span className='arrows'>&nbsp;»</span>
          </div>
        </div>
        <br></br>
        Movie ID: <input onChange={this.handleFlickPick} size='3' />
        <Modal
          pics={this.state.pics}
          currentPic={this.state.currentPic}
          currentFlick={this.state.currentFlick}
          show={this.state.show}
          onClose={this.handleClose}
          leftClick={this.goLeft}
          rightClick={this.goRight} >
        </Modal>
      </div>
    );
  }
}

export default App;