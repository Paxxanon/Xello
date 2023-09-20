import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default function FrontNavbar() {
  return (
    <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Xello</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item>Authentication</NavDropdown.Item>
              <NavDropdown.Item>Placeholder #2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Technologies" id="basic-nav-dropdown">
              <h6 className='bold dropDownTitle' >Backend</h6>
              <NavDropdown.Item href="#action/1" >Java SpringBoot</NavDropdown.Item>
              <NavDropdown.Item href="#action/1" >Java Spring.Security</NavDropdown.Item>
              <NavDropdown.Item href="#action/1" >mySQL</NavDropdown.Item>
              <NavDropdown.Divider />
              <h6 className='bold dropDownTitle'>Frontend</h6>
              <NavDropdown.Item href="#action/3.3">React ts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bootstrap</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Redux</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end' />
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/u/home">Home</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </div>
   
  )
}
