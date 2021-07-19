import { Navbar, Icon, NavItem } from 'react-materialize'
import Logo from "../media/logo.svg"
import Modal from "./Contact"
// import { NavLink } from 'react-router-dom';
import Map from './Map'
// const navitemColor = "black-text"

function Nav() {
  const modalId = "Contact"
  const desktopModalTrigger =
    <NavItem id={modalId} className="black-text" >
      Contact
    </NavItem>
  const mobileModalTrigger = <span className="fixed-action-btn">
    <a id={modalId} href="/#" className="red waves-effect waves-light btn btn-floating" >
      <i class="material-icons">phone</i>
    </a>
    </span>
  const modalHeader = ""
  const modalData = <div><br />
  <a class="btn btn-block orange text-white" href="tel://+14356551446" waves="light">
    <i class="material-icons lrg">local_phone</i>
  </a>
  <
    h6> (435) 655-1446</h6>
  <br />
  <a class="btn btn-block orange text-white" href="mailTo://info@lhpslab.com" waves="light">
    <i class="material-icons">mail</i></a><h6>  info@lhpslab.com</h6>
    <Map/>
    </div>

  return (<span>
    <Navbar
      fixed={true}
      alignLinks="right"
      brand={<a href="/"><img alt="logo" className="nav-logo" src={Logo} /></a>}
      id="mobile-nav"
      menuIcon={<Icon className="none">menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      {/* <NavLink className={navitemColor} to="/about">About</NavLink> */}
      <span className="hide-on-med-and-down">
        <Modal
          modalId={modalId}
          trigger={desktopModalTrigger}
          header={modalHeader}
          data={modalData}
        />
      </span>

    </Navbar>
    <span className="hide-on-large-only">
      <Modal
        modalId={modalId}
        trigger={mobileModalTrigger}
        header={modalHeader}
        data={modalData}
      />
    </span>
  </span>
  );
}


export default Nav;
