import React from 'react';
import Map from './Map'
import logo from './media/img/logo.svg';

import 'materialize-css/dist/css/materialize.min.css';
import { SideNavItem, Navbar,  Modal, Divider , Row, Col, NavItem} from 'react-materialize';
import './App.css';
import Home from './Home';
import About from './About';
import Gallery from "./Gallery";
import { BrowserRouter, Route, Switch, Link, } from 'react-router-dom';
import Feed from "react-instagram-authless-feed";
import { SocialIcon } from "react-social-icons";

class CallModal extends React.Component {
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
      <div onClick={this.handleToggleClick}>
        {this.state.showWarning ?
          <div className="fixed-action-btn">
            <a className="btn-floating btn-large red">
              <i className="large material-icons">local_phone</i>
            </a>
          </div >
          : <Modal
            className='center-align'
            bottomSheet={false}
            fixedFooter={false}
            header="CONTACT"
            id="modal1"
            open={true}
            options={{
              dismissible: false,
              endingTop: '10%',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              opacity: 0.5,
              outDuration: 250,
              preventScrolling: true,
              startingTop: '4%'
            }} >
            <div class="divider" /><br />
            <div class="modal-content">
              <br />
              <a class="btn btn-block orange text-white" href="tel://+18013811204" waves="light">
                <i class="material-icons lrg">local_phone</i>
              </a>
              <
                h6> (801) 381-1204</h6>
              <br />
              <a class="btn btn-block orange text-white" href="mailTo://info@lhpslab.com" waves="light">
                <i class="material-icons">mail</i></a><h6>  info@lhpslab.com</h6></div>

            <Map />
            <br />
            <Divider />
          </Modal>
        }
      </div>

    );
  }
}

class ContactModal extends React.Component {
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
      <div onClick={this.handleToggleClick}>
        {this.state.showWarning ?
          <span>Contact</span>
          : <Modal
            className='center-align higher'
            bottomSheet={false}
            fixedFooter={false}
            header="CONTACT"
            id="modal1"
            open={true}
            options={{
              dismissible: false,
              endingTop: '10%',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              opacity: 0.5,
              outDuration: 250,
              preventScrolling: true,
              startingTop: '4%'
            }} >
            <div class="divider" /><br />
            <div class="modal-content">
              <br />
              <a class="btn btn-block orange text-white" href="tel://+18013811204" waves="light">
                <i class="material-icons lrg">local_phone</i>
              </a><
                h6> (801) 381-1204</h6>
              <br />
              <a class="btn btn-block orange text-white" href="mailTo://info@lhpslab.com" waves="light">
                <i class="material-icons">mail</i></a><h6>  info@lhpslab.com</h6></div>

            <Map />
            <br />
            <Divider />
          </Modal>
        }
      </div>

    );
  }
}

export default function BasicExample() {
  return (
    <BrowserRouter>
      <div>
        <Navbar
          brand={<Link to="/lhp"><img className='App-logo valign-wrapper' src={logo} alt="logo" /></Link>}
          centerLogo
          className='red'>
            <SideNavItem
            href="/"
      user={{
        
        image: 'lhp/static/media/logo.b6e385ab.svg',
      }}
      userView
    />
            <Link to="/lhp">Home</Link>

            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Divider/>
            <NavItem><ContactModal/></NavItem>
        </Navbar>


        <Switch>
          <Route exact path="/lhp">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
      <CallModal/>
      <br/>
      <Foot />
    </BrowserRouter>
  );
}


function Foot() {
  return (<span>
    <Row className='grey lighten-4'
 
    > 
    <h5 className='text-grey darken-3 footer_title'>Instagram Feed</h5>
   <Feed  userName="pauldowlandtile" className="Feed" classNameLoading="Loading" limit="4" />
    </Row>
    <Row>
      <Col
          className='left'
        >
          <SocialIcon
            bgColor="#ff5a01"
            url="https://instagram.com/pauldowlandtile"
          />
          <SocialIcon

            url="https://www.facebook.com/pauldowlandtile" />


          <SocialIcon
            url="https://twitter.com/pauldowlandtile" />
        </Col>
    </Row>

    <div className="footer-copyright">
              © 2019-<noscript>2018</noscript><script type="text/javascript">document.write(new Date().getFullYear());</script>2020 Deepturn Ltd, All rights reserved.
              <a className="grey-text text-darken-1 right" href="https://github.com/LandoLabrum/Deepturn-Ltd/blob/main/LICENSE">MIT License</a>
              <br/>
            </div>

    </span>
  );
}


// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }
