import React from 'react';
import './nav.css';
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Menu() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Frameex</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    
    </Navbar>
    
        </div>
    )
}
