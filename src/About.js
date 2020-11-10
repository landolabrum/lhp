import React from 'react';
import { Container, Row, Col, MediaBox} from 'react-materialize';
import about1 from './media/img/about1.jpg';
import about2 from './media/img/about2.jpg';

class About extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <Container className='bod'>
               <Row>
          <Col>
      <h3 className='left header'>About Us</h3>
      </Col> </Row>
        {/* <Row>
      <Col s={12} m={6}>
      <img className='materialboxed responsive-img' src={about1}/>
      <br/>
      <img className='materialboxed responsive-img' src={about2}/>
      </Col>
      <Col s={12} m={6}>

      <h4 className='left'>OUR APPROACH</h4>
      <p>Aside from customer satisfaction, our goals at Paul Dowland Tile Inc. are professionalism, perfection and to always be on schedule with our tasks. With an immense passion for the work we do, we aim to exceed the expectations of our customers.</p>
      </Col>
    </Row> */}
        <Row>
          <Col s={12} m={6}>
            <MediaBox
              className='responsive-img'
              id="MediaBox_7"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200
              }}
            >
              <img
                alt=""
                src={about1}
                
              />
            </MediaBox></Col>
          <Col s={12} m={6}>

            <h4 className='left'>OUR APPROACH</h4>
            <p>Aside from customer satisfaction, our goals at Paul Dowland Tile Inc. are professionalism, perfection and to always be on schedule with our tasks. With an immense passion for the work we do, we aim to exceed the expectations of our customers.</p>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={6}>
            <MediaBox
              className='responsive-img'
              id="MediaBox_7"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200
              }}
            >
              <img
                alt=""
                src={about2}
                
              />
            </MediaBox></Col>
          <Col s={12} m={6}>

            <h4 className='left'>OUR STORY</h4>
            <p>Paul Dowland Tile Inc. is a four generation, family owned and operated business based out of Murray and Park City, Utah. Combined, we have over 100 years of tiling experience and specialize in both commercial and residential tile installation. Paul Dowland’s own business has been in operation in Utah since 1988, generating experience that gives him a competitive edge in the industry.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;