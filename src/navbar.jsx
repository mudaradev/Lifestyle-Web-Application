import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='nav'>
        <Container>
          <Navbar.Brand className="brand" href="#home">Easy<br/>Lifestyle</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#design">Free Repair</NavDropdown.Item>
              <NavDropdown.Item href="#dev">1 yr Warranty</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}