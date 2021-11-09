import React from 'react'
import logo from '../logo.svg'
import { Nav, Navbar, Form, Container, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

function NavbarC(){
    return (
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto"></div>
                    <Navbar bg="navbar navbar-expand-lg navbar-light" expand="lg">
                        <Container fluid>
                        <Link to="/"> <img className= "navbar-brand" src={logo} alt="icon"/></Link>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll> 
                            </Nav>
                            
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0" id="navauth">
                                <li><Link  to="/login"><button class="btn btn-outline-primary">Login </button></Link></li>
                                <li><Link  to="/register"><button class="btn btn-outline-primary">Signup</button></Link></li>
                            </ul>
                            
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    
                </div>
            </div>
       

    )
}

export default NavbarC;