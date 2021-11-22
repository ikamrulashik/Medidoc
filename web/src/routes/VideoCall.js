import React from 'react'
import {Container, Row, Col, Card, Nav, Navbar } from "react-bootstrap";
import avatar from "../assets/avatar.svg"
import message from "../assets/message.svg"
import notification from "../assets/notification.svg";
import logo from '../logo.svg'
import callfull from '../assets/icons/call-full.svg'
import callunmute from '../assets/icons/call-unmute.svg'
import callmute from '../assets/icons/call-mute.svg'
import callcancel from '../assets/icons/call-cancel.svg'
import callvideo from '../assets/icons/call-videoon.svg'
import callvideooff from '../assets/icons/call-videooff.svg'
import callmore from '../assets/icons/call-more.svg'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';

function VideoCall () {
    return (
        <div style={{backgroundColor:"#F1F8FF", minHeight: "100vh"}}>
            <div className="Navbar-doctor">
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
                                    <Nav className="justify-content-end" activeKey="/home">
                                        <Nav.Item>
                                            <Nav.Link eventKey="link-1"><img className= "nav-mess" src={message} /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="link-2"><img className= "nav-noti" src={notification} /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link>
                                            <Link to="/doctorprofile"> <img className= "nav-avatar" src={avatar} /></Link>
                                            </Nav.Link>
                                        </Nav.Item>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                    </div>
                </div>
                
            </div>
            <div className="video-body">
                <h5 className="text-center">Video Conferencing</h5>
                <div className="video-frame">
                    <div className="flex-container">
                        <Link to="#"  className = "call-icon"> <img  src={callfull} /></Link>
                        <Link to="#"  className = "call-icon"> <img  src={callunmute} /></Link>
                        <Link to="#"  className = "call-icon"> <img  src={callcancel} /></Link>
                        <Link to="#"  className = "call-icon"> <img  src={callvideo} /></Link>
                        <Link to="#"  className = "call-icon"> <img  src={callmore} /></Link>
                    </div>
                </div>
                <div className="second-person">
                        

                </div>
            </div>
            
            
            <div className="video-chat">
                <h5 className = "chat-header">E prescription</h5>
                <br/>
                <div className="add-medicine">
                <button type="button" className="btn btn-primary">Add medicine</button>

                </div>
                

            </div>
            <div>
                <button className="pres-btn">E prescription</button>
            </div>
            <Footer/>


        </div>
    )
};

export default VideoCall;