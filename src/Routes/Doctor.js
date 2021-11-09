import React from "react";
import {Container, Row, Col, Card, Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "../components/sidebar/Sidebar";
import '../components/sidebar/Sidebar.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import doctor from "../images/doctor.svg"
import avatar from "../assets/avatar.svg"
import message from "../assets/message.svg"
import notification from "../assets/notification.svg";
import {Link} from 'react-router-dom'
const Dash = props => {
   

    return (
        <>
        
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                      <div className="mt-3 ">
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
                        
                        <div className="card card-top">
                          <Row xs={1} md={2}>
                            <Col>
                            <div>
                                <h4>Good Morning, Dr. Something</h4>
                                <h5>Have a nice day at work</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="text-center">
                                <img className= "doc-img" src={doctor} />
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <br/>
                      <h5 className="datetime">Date and Time</h5>
                      <br/>
                      <Row xs={1} md={2}>
                          <Col>
                          <h5>Today Appointment</h5>
                            <Card  className="card-content">
                              <Card.Img variant="top" src="holder.js/100px160" />
                              <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                  This is a longer card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col>
                          <h5>Next Patient Details</h5>
                            <Card  className="card-content">
                              <Card.Img variant="top" src="holder.js/100px160" />
                              <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                  This is a longer card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col>
                          <h5>Appointment Request</h5>
                            <Card className="card-content">
                              <Card.Img variant="top" src="holder.js/100px160" />
                              <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                  This is a longer card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col>
                          <h5>Number of Patients</h5>
                            <Card  className="card-content">
                              <Card.Img variant="top" src="holder.js/100px160" />
                              <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                  This is a longer card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                      </Row>
                    </Col> 
                </Row>

            </Container>
        </>
        );
  };
  const Doctor = withRouter(Dash);
  export default Doctor;