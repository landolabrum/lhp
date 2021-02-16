import React from 'react';
import Map from './Map'
import logo from './media/img/logo.png';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css';
import { SideNavItem, Navbar, Modal, Divider, Row, Col, NavItem } from 'react-materialize';
import './App.css';
import Home from './Home';
import About from './About';
import Gallery from "./Gallery";
import { BrowserRouter, Route, Switch, Link, useLocation} from 'react-router-dom';
// import { buildUrl } from 'react-instafeed'
import { SocialIcon } from "react-social-icons";

// import Feed from "react-instagram-authless-feed"

{/* <Feed  userName="pauldowlandtile" className="Feed" classNameLoading="Loading" limit="4" /> */}









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
              dismissible: true,
              endingTop: '10%',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              opacity: 0.5,
              outDuration: 250,
              preventScrolling: false,
              startingTop: '4%'
            }} >
            <div class="divider" /><br />
            <div class="modal-content">
              <br />
              <a class="btn btn-block orange text-white" href="tel://+14356551446" waves="light">
                <i class="material-icons lrg">local_phone</i>
              </a>
              <
                h6> (435) 655-1446</h6>
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
              <a class="btn btn-block orange text-white" href="tel://+14356551446" waves="light">
                <i class="material-icons lrg">local_phone</i>
              </a><
                h6> (435) 655-1446</h6>
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
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter >
      <div>
        <Navbar 
          brand={<Link to="/"><img className='black-text App-logo valign-wrapper' src={logo} alt="logo" /></Link>}
          centerLogo
          className='white black-text'>
          <Link  className='black-text' to="/">Home</Link>
          <Link  className='black-text' to="/about">About</Link>
          <Link  className='black-text' to="/gallery">Gallery</Link>
          <Divider />
          <NavItem className='black-text'><ContactModal /></NavItem>
        </Navbar>


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          
          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </div>
      <CallModal />
      <br />
      <Foot />
    </BrowserRouter>
  );
}


function Foot() {
  return (<span>
    <Row className='grey lighten-4'

    >
      {/* <h5 className='text-grey darken-3 footer_title'>Instagram Feed</h5> */}

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
      <br />
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
