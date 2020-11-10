import React from 'react';
import Map from './Map'
import GoogleMapReact from 'google-map-react';
import logo from './media/img/logo.svg';
import 'materialize-css';
import { Row, Col, Footer, Navbar, NavItem, Modal, Divider, Collection, CollectionItem } from 'react-materialize';
import './App.css';
import Home from './Home';
import About from './About';
import Shop from "./Shop";
import { BrowserRouter, Route, Switch, Link, } from 'react-router-dom';
import Feed from "react-instagram-authless-feed"
import { SocialIcon } from 'react-social-icons';




class Call_modal extends React.Component {
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
      <a onClick={this.handleToggleClick}>
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
      </a>

    );
  }
}








class Contact_modal extends React.Component {
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
      <a onClick={this.handleToggleClick}>
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
      </a>

    );
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          brand={<Link to="/"><img className='App-logo valign-wrapper' src={logo} alt="logo" /></Link>}
          centerLogo
          className=' grey lighten-4'>
          <NavItem>
            <Link to="/">Home </Link>
          </NavItem>
          <NavItem><Link to="/about">About Us </Link></NavItem>
          <NavItem><Link to="/shop">Gallery</Link></NavItem>
          <NavItem >
            <Contact_modal/>
          </NavItem>
        </Navbar>


        <Call_modal />
        <header className="App-header">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route component={Error} />
          </Switch>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </BrowserRouter>
      <Footer
        moreLinks={<span             className='left'
        >
          <SocialIcon
            bgColor="#ff5a01"
            url="https://instagram.com/pauldowlandtile"
          />
          <SocialIcon
            
            url="https://www.facebook.com/pauldowlandtile" />

          
          <SocialIcon 
            url="https://twitter.com/pauldowlandtile" />
        

       

        </span>
        }
        >
        {/* <h5 className="black-text">
          Instagram
    </h5> */}
        <Feed userName="pauldowlandtile" className="Feed" classNameLoading="Loading" limit="4" />
      </Footer>

    </div>
  );
}

export default App;