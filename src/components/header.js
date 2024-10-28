import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.jpg';
function AppHeader() {
  return (
    <Navbar className="navbar-glass" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" style={{ height: '60px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">BookSeries</Nav.Link>
            <Nav.Link href="#books">Hogwarts Library</Nav.Link>
            <Nav.Link href="#works">Our Library</Nav.Link>
            <Nav.Link href="#blog">Movie Show</Nav.Link>
            <Nav.Link href="#games">Game</Nav.Link>
            <Nav.Link href="#fan-creations">Fan Creations</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#teams">Character Harry Potter</Nav.Link>
            <Nav.Link href="#testimonials">Wizarding Words</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;