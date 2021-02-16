import React from 'react';
import { Container, Row, Col  } from 'react-materialize';
// import useSound from 'use-sound';
// import Qf from './media/qf.mp3';
// import Egg from './media/egg.svg'
// const BoopButton = () => {
//   const [play] = useSound(Qf );
//   return <img onClick={play} className='egg wiggle'src={Egg}/>;
// };
import LazyHero from 'react-lazy-hero';





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
         

        <Container><h4 className="left-align hvy">GALLERY</h4></Container>
       <LazyHero
          imageSrc="https://sassomeccanica.it/wp-content/uploads/2018/01/sasso-k-lux-bg-2.jpg" 
          opacity='0'
        >
          
          <Row><Col s={8} offset='s2'>
            <h4 className='black-text  hvy'>Gallery Coming Soon</h4>
            {/* <h5 className="light grey-text text-lighten-3">Helping Utah Countertop Specialists make more money, without cutting more kitchens. POLISH. HONE. LEATHER. ICE.</h5> */}
          </Col>
          </Row>
        </LazyHero>
        {/* <Carousel>
          <div>
            <img alt='' src="https://sassomeccanica.it/wp-content/uploads/2018/01/sasso-k-lux-bg-2.jpg" />
            <h1 className="legend">Gallery Coming Soon</h1>
          </div>

        </Carousel> */}



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