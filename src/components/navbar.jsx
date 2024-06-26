import React, { useState } from 'react';
import './navbar.css';
import linkedin from '../assets/linkedin_icon.png';
import contact from '../assets/contact.png';
import { Link } from 'react-scroll';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Let's Connect
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="linkedinContainer">
          <h4 class='linkedinTitle'>Linkedin:</h4>
          <a href="https://www.linkedin.com/in/kanishkdogra/"><img src = {linkedin} class = "linkedin" /></a>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export function Navbar() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {/* <div className='logo'></div> */}
      < br/>
      <div class='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} className='desktopMenuListItem'>Portfolio</Link>
      </div>
      
      <button
        class='desktopMenuBtn'
        onClick={() => setModalShow(true)}
      >
        <img src={contact} class="desktopMenuImg" alt="Contact" />
        Contact Me
      </button>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
