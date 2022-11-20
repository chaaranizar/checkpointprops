import React from 'react';
import './App.css';
import Profile from './Profile/Profile';
import profilePhoto from './Profile/DSC_9092 copy.jpg'
import {Navbar, Container, Nav} from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='portfolio'>Portfo<span className='lio'>lio</span></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className={`font-poppins bg-dark text-white flex text-[35px]`}>
      
    <Profile FullName="Nizar Chaara" Bio="Student" Profession="Full-Stack Developper" Adress="" Age='36'/>
    <Profile><img src={profilePhoto} alt="profilephoto"/></Profile>
        </div>
    </div>
  );
}

export default App;
