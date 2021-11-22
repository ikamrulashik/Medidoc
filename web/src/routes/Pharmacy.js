import React from "react";
import {Container, Row, Col, Card, Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "../components/sidebar/pharmacy/PharSidebar";
import '../components/sidebar/pharmacy/PharSidebar.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import pharmacy from "../images/pharmacy.svg"
import avatar from "../assets/avatar.svg"
import chart from "../components/charts/chart.svg"
import message from "../assets/message.svg"
import notification from "../assets/notification.svg";
import AppCard from "../components/dashboard/AppCard"
import PatDet from "../components/dashboard/PatDet";
import Appointment from "../components/dashboard/Appointment";
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
                          <Nav.Link eventKey="link-2"><img className= "nav-noti" src={notification} /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link>
                          <Link to="/doctorprofile"> <img className= "nav-avatar" src={avatar} /></Link>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <div className="phar-content-header">
                        <div className="card card-top phar-header">
                          <Row xs={1} md={2}>
                            <Col>
                            <div className = "doctor-title">
                                <h2>Hello P.Name</h2>
                                <h5>It’s good to see you again.</h5>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="phar-image">
                          <img className= "phar-img" src={pharmacy} />
                        </div>
                      </div>
                      </div>
                        
                      
                    </Col> 
                </Row>

            </Container>
        </>
        );
  };
  const Pharmacy = withRouter(Dash);
  export default Pharmacy;