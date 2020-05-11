import React from 'react';
import PhotoSet from './PhotoSet';
import '../styles/main.scss';

const photoDB = require('../../../data/photodb.json');
const movieDB = require('../../../data/moviedb.json');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pics: [photoDB[0], photoDB[1], photoDB[2], photoDB[3], photoDB[4], photoDB[5]],
      currentPic: photoDB[0],
      currentFlick: movieDB[0],
      term: ''
    };
    this.handleFlickPick = this.handleFlickPick.bind(this);
  }

  handlePicClick(photo) {
    this.setState({
      currentPic: photo
    });
  }

  handleFlickPick(e) {
    this.setState({
      currentFlick: movieDB[e.target.value - 1]
    });
    let moviePics = movieDB[e.target.value - 1].images.split(',');
    this.setState({
      pics: photoDB.filter(photo => {
        return moviePics.includes(photo.id);
      })
    });
  }

  render() {
    return (
      <div className='module'>
        <h2>Photos</h2>
        <div className='grid'>
          <div className='thumbnail row'>
            <PhotoSet photos={this.state.pics} handlePicClick={this.handlePicClick.bind(this)} />
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
      </div>
    );
  }
}

export default App;