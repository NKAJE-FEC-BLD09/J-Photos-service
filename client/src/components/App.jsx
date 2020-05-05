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
      <div>
        <h2>Photos</h2>
        <div class='grid'>
          <div class='thumbnail row'>
            <PhotoSet photos='https://imdbpics.s3.us-east-2.amazonaws.com/ali-pazani-pTKWWQbow44-unsplash.jpg' handleClick={this.handleClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;