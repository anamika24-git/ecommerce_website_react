import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Person, Search } from 'react-bootstrap-icons';


function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><b>Furniture World</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#product"><b>Product</b></Nav.Link>
            <Nav.Link href="#downloadapp"><b>DownloadApp</b></Nav.Link>
            <Nav.Link href="#supplier"><b>Become a Supplier</b></Nav.Link>
            <Nav.Link href="#newsroom"><b>Newsroom</b></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#search">
              <input type="text" placeholder="Search" /></Nav.Link>
            <Nav.Link href="#profile">
              <Person size={20} />
              <b>Profile</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;