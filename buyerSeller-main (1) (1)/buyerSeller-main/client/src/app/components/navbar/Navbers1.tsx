import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export interface INavbers1{};

const  Navbers1:React.FC<INavbers1>=(props)=>{
    return (<>
     <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Aisha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>);
};

export default Navbers1;