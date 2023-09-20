import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default function UserNavbar() {
 

  return (
   <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/u/home">Xello</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Workspaces" id="basic-nav-dropdown">
              <h6 className='bold dropDownTitle' >Current Workspace</h6>
              <NavDropdown.Item href="#action/1" >Placeholder#1</NavDropdown.Item>
              <NavDropdown.Divider />
              <h6 className='bold dropDownTitle'>Your Workspaces</h6>
              <NavDropdown.Item href="#action/3.3">Placeholder #1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Placeholder #2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Recent" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1" >Placeholder#1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Placeholder #2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          <NavDropdown title="ph pImage">
            <h6 className='bold dropDownTitle' >ACCOUNT</h6>
            <NavDropdown.Item href="#action/1" >Switch account</NavDropdown.Item>
            <NavDropdown.Item href="#action/1" >Manage account</NavDropdown.Item>
            <NavDropdown.Divider />
            <h6 className='bold dropDownTitle' >XELLO</h6>
            <NavDropdown.Item href="/u" >Profile and visibility</NavDropdown.Item>
            <NavDropdown.Item href="/u/account" >Settings</NavDropdown.Item>
            <NavDropdown.Item>Theme</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/1" >Log out</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  )
}
