import React from 'react';
import PhotoSet from './PhotoSet';
import Modal from './Modal';
import photoDB from '../../../data/photodb.json';
import '../styles/main.scss';
import '../styles/modal.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pics: [],
      currentPic: {},
      currentFlick: {},
      show: false
    };

    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.handleFlickPick = this.handleFlickPick.bind(this);
    this.handlePicClick = this.handlePicClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.handleFlickPick(3);
  }

  getRandomPics() {
    const randomPics = photoDB.filter(photo => {
      return photo.caption === '';
    });
    
    var pic1 = Math.floor(Math.random() * randomPics.length);
    var pic2 = Math.floor(Math.random() * randomPics.length);
    var pic3 = Math.floor(Math.random() * randomPics.length);
    var pic4 = Math.floor(Math.random() * randomPics.length);
    var pic5 = Math.floor(Math.random() * randomPics.length);
    var pic6 = Math.floor(Math.random() * randomPics.length);
  
    this.setState({
      pics: [randomPics[pic1], randomPics[pic2], randomPics[pic3], randomPics[pic4], randomPics[pic5], randomPics[pic6]]
    });
  }

  goLeft() {
    this.setState({
      currentPic: this.state.pics[this.state.pics.indexOf(this.state.currentPic) - 1]
    })
  } 

  goRight() {
    this.setState({
      currentPic: this.state.pics[this.state.pics.indexOf(this.state.currentPic) + 1]
    })
  } 

  handleClose(e) {
    this.setState({ show: false });
  } 

// HTTP GET /photos?startIndex=0&size=6
  handleFlickPick(movie_id) {
    fetch(`http://localhost:3004/${movie_id}`)
    .then(res => res.json())
    .then((data) => {
      console.log("data: ", data);
      this.setState({
        currentFlick: data
      });
      if (data.images.length > 1) {
        this.setState({
          pics: photoDB.filter(photo => {
            return data.images.includes(photo.photo_id)
          })
        })
      } else {
        this.getRandomPics();
      }
      console.log(this.state);
    })
  }

  handlePicClick(e) {
    this.setState({
      currentPic: photoDB[e.target.id - 1],
      show: true
    });
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
                {/*<br></br>
 Movie ID: <input onChange={this.handleFlickPick} size='3' /> */}
        <Modal
          pics={this.state.pics}
          currentPic={this.state.currentPic}
          currentFlick={this.state.currentFlick}
          show={this.state.show}
          onClose={this.handleClose}
          goLeft={this.goLeft}
          goRight={this.goRight} >
        </Modal>
      </div>
    );
  }
}

export default App;