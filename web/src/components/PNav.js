import React from 'react'
import logo from '../logo.svg'
import logout from './logout.svg'
import {Link} from 'react-router-dom'
import { Nav, Navbar, Form, Container, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

function PNav() {
    return (
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto"></div>
                    <Navbar  bg="navbar navbar-expand-lg navbar-light" expand="lg">
                        <Container fluid>
                            <Link to="/patient"> <img className= "navbar-brand" src={logo} alt="icon"/></Link>
                                <Navbar.Toggle />
                                <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll> 
                                </Nav>
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0" id="navauth" >
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to ="/" className="nav-link"><img src={logout} width="15" height="25"className="d-inline-block align-top" alt="icon"/></Link> 
                                    </li>
                                </ul>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                
            </div> 
        </div>
    )
}
export default PNav;