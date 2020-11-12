import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container  } from 'react-materialize';
import useSound from 'use-sound';
import Qf from './media/qf.mp3';

import Egg from './media/egg.svg'

const BoopButton = () => {
  const [play] = useSound(Qf );
  return <img onClick={play} className='egg wiggle'src={Egg}/>;
};





class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  
  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  render() {

    return (
      <span>
        <Container><h4 class="left-align hvy">GALLERY</h4></Container>
        <Carousel>
          <div>
            <img src="https://sassomeccanica.it/wp-content/uploads/2018/01/sasso-k-lux-bg-2.jpg" />
            <h1 className="legend">Gallery Coming Soon</h1>
          </div>

        </Carousel>
        {/* <div onClick={this.handleToggleClick}>
        {this.state.showWarning ?
        <sm className='white-text'>easter egg
          </sm>
          :
          <BoopButton/>
          }
          </div> */}
        
        
        
        </span>
    );
  }
}

export default Gallery;