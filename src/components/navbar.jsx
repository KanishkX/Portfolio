import React, { useState } from 'react';
import './navbar.css';
import linkedin from '../assets/linkedin_icon.png';
import contact from '../assets/contact.png';
import Button from 'react-bootstrap/Button';
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
        <div className="linkedinContainer">
          <h4 className='linkedinTitle'>Linkedin:</h4>
          <a href="https://www.linkedin.com/in/kanishkdogra/"><img src = {linkedin} className = "linkedin" /></a>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export function Navbar() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="navbar">
      <div className='logo'></div>
      <button
        className='desktopMenuBtn'
        onClick={() => setModalShow(true)}
      >
        <img src={contact} className="desktopMenuImg" alt="Contact" />
        Contact Me
      </button>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
