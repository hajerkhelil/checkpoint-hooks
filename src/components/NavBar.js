import React from 'react'
import { Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function NavBar() {
    return (
        <div className='nav'>
        <Navbar  >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">ShOFTN</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Movie</Nav.Link>
              <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Romance</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">comédie</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">drama</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">crime</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      
    )
    }
   


export default NavBar
