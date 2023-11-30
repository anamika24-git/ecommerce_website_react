import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Person } from 'react-bootstrap-icons';

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container style={{ fontWeight: 'bold' }}>
        <Navbar.Brand>
          <b>Furniture World</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    textDecoration: 'none',
                    color: isActive ? 'blue' : 'black',
                  };
                }}
              >
                Product
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/giftCard"
                style={({ isActive }) => {
                  return {
                    textDecoration: 'none',
                    color: isActive ? 'blue' : 'black',
                  };
                }}
              >
                GiftCard
              </NavLink>
            </Nav.Link>
            <Nav.Link>DownloadApp</Nav.Link>
            <Nav.Link>Newsroom</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#search">
              <input type="text" placeholder="Search" />
            </Nav.Link>
            <Nav.Link href="#profile">
              <Person size={20} />
              <NavLink
                to="/profile"
                style={({ isActive }) => {
                  return {
                    textDecoration: 'none',
                    color: isActive ? 'blue' : 'black',
                  };
                }}
              >
                Profile
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
