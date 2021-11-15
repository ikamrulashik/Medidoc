import React from "react";
import {Container, Row, Col, Card, Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "../components/sidebar/Sidebar";
import '../components/sidebar/Sidebar.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import doctor from "../images/doctor.svg"
import avatar from "../assets/avatar.svg"
import chart from "../components/charts/chart.svg"
import message from "../assets/message.svg"
import AppCard from "../components/dashboard/AppCard"
import PatDet from "../components/dashboard/PatDet";
import Appointment from "../components/dashboard/Appointment";
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
                      <h5 className="datetime">10.00 pm - 17 November 2021 Wednesday</h5>
                      <br/>
                      <Row xs={1} md={2}>
                          <Col>
                          <h5>Today Appointment</h5>
                            <Card  className="card-content">
                              <AppCard/>
                              <br/>
                              <AppCard/>
                              <br/>
                              <AppCard/>
                            </Card>
                          </Col>
                          <Col>
                          <h5>Next Patient Details</h5>
                            <Card  className="card-content">
                              <PatDet/>
                            </Card>
                          </Col>
                          <Col>
                          <br/>
                          <h5>Appointment Request</h5>
                            <Card className="card-content">
                              <Appointment/>
                              <br/>
                              <Appointment/>
                              <br/>
                              <Appointment/>
                              <br/>
                              <Appointment/>
                            </Card>
                          </Col>
                          
                          <Col>
                          <br/>
                          <h5>Number of Patients</h5>
                            <Card  className="card-content">
                              <Card.Img variant="top" src={chart} />
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