import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap';
// import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import ContactUs from './Pages/ContactUs';
import Destinations from './Pages/Destinations';
import Packages from './Pages/Packages';
function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img className='m-auto' src='http://themecrazy.net/html/manali/img/logo.png'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto py-3 top ">
          {/* <LinkContainer to="/"> */}
            <Nav.Link href="#link">Home</Nav.Link>
            {/* </LinkContainer> */}
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Tours</Nav.Link>
            {/* <LinkContainer to="/destinations"> */}
            <Nav.Link href="#link">Destinations</Nav.Link>
            {/* </LinkContainer> */}
            <Nav.Link href="#link">Hotels</Nav.Link>
            
            <NavDropdown title="Packages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Packages</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Packages Offers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Package Details</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Booking Package</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Confirmation
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#link">Blog</Nav.Link>
            {/* <LinkContainer to="/contactus"> */}
            <Nav.Link>Contact Us</Nav.Link>
            {/* </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* <Routes> */}
        {/* <Route path="/" element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="packages" element={<Packages />} /> */}
        
      {/* </Routes> */}
    </>
  )
}

export default Header
