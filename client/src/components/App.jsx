import React from 'react';
import PhotoSet from './PhotoSet';
import '../styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPic: ''
    };
  }

  handleClick(photo) {
    this.setState({
      currentPic: photo
    });
  }

  render() {
    return (
      <div className='module'>
        <h2>Photos</h2>
        <div className='grid'>
          <div className='thumbnail row'>
            <PhotoSet photos='https://imdbpics.s3.us-east-2.amazonaws.com/ali-pazani-pTKWWQbow44-unsplash.jpg' handleClick={this.handleClick.bind(this)} />
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