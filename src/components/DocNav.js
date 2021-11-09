import React from 'react'
import logo from '../logo.svg'
import logout from './logout.svg'
import {Link} from 'react-router-dom'
import { Nav, Navbar, Form, Container, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

function DocNav() {
    return (
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="mx-auto"></div>
                    <Navbar  className="navbar" expand="lg">
                        <Container fluid>
                            <Link to="/patient"> <img className= "navbar-brand" src={logo} alt="icon"/></Link>
                                <Navbar.Toggle />
                                <Navbar.Collapse id="navbarScroll">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0" id="navauth" >
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Profile</a>
                                    </li>
                                </ul>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                
            </div> 
        </div>
    )
}
export default DocNav;