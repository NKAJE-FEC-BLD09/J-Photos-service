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
      currentFlick: movieDB[0]
    };
    this.handleFlickPick = this.handleFlickPick.bind(this);
  }

  handlePicClick(photo) {
    this.setState({
      currentPic: photo
    });
  }

  handleFlickPick(movie) {
    this.setState({
      currentFlick: movie
    });
    let moviePics = photoDB.filter(photo => {
      return movieDB
    })
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
              See all 141 photos
            </a>
            <span className='arrows'>&nbsp;»</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;