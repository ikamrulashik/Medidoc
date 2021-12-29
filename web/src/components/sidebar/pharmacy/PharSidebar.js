import React from "react";
import { withRouter } from "react-router";
import logo from '../../logo.svg'
import authout from '../authout.svg'
import "./PharSidebar.css";
import {Link} from 'react-router-dom'
import { Nav, Navbar, Form, Container, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const Side = props => {
   

    return (
        
        <div id="sidebar">
            <Nav className="col-md-12 d-none d-md-block sidebar">
                <Link to="/doctor"> <img className= "sidebar-icon" src={logo} alt="icon"/></Link>
                <Nav.Item>
                    <Nav.Link href="/doctor" className="side_link">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/invoice" className="side_link">Invoice</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/medicine" className="side_link">Medicine</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/customer" className="side_link">Customer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to ="/" className="nav-link"><img src={authout} width="15" height="25"className="logout"/></Link>
                </Nav.Item>
            </Nav>     
        </div>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar;