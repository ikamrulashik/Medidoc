import React from "react";
import './Pharmacy.css'
import {Container, Row, Col, Card, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import { faPills,faQrcode } from "@fortawesome/free-solid-svg-icons";
 
const Dash = props => {
  const element = <FontAwesomeIcon icon={faPills} />
  const qr = <FontAwesomeIcon icon={faQrcode}/>
 
    return (
        <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
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
                            <div className="header-margin ms-3">
                                <h2>Hello P.Name</h2>
                                <h5>It’s good to see you again.</h5>
                              </div>
                            </Col>
                            <div className="s">
                              <img className="avatar-size" src={pharmacy} />
                            </div>
                          </Row>
                        </div>
                       
                      </div>
                      </div>
                        <div class="row">
                          <div class="col-8 mb-5">
                              <div>
 
                                <h3 className="text-center mt-4">12.00 pm - 07 July 2021 Thursday</h3>
                                </div>
 
                              <div className="w-auto mt-5 container">
                                  <h5 className="fw-bolder">Medicines and Generic</h5>
                                 
                                  <div className="d-flex">
                                    <h6 className="w-auto mt-4 mb-3 me-4 ">Available <span style={{marginLeft:"20px",color:"GrayText"}}>Out of stock</span></h6>
                                  <div>
                                  <input className="input-box" type="text"/>
                                  <button className="search-button">
                                    <img src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png" alt=""/>
                                  </button>
                                  </div>
                                  </div>
                              </div>
 
                              <div>
                               
                              </div>
 
                              <div className="ms-4 medicine-border d-flex align-items-center">
                             
                                <p className="bg-light pill-icon ms-3 ">{element}
                                </p>
                                <div className="ms-5 mt-3">
                                      <h6>Rabifast</h6>
                                      <p>Rabiprazol</p>
                                </div>
                               
                             
                                <p className="mt-3 ms-auto">25mg</p>
                             
 
                             
                              <button className="order-btn ms-auto me-4">10 Taka</button>
                             
 
                              </div>
 
 
                              {/* 2 */}
                              <div className="ms-4 medicine-border d-flex align-items-center mt-3">
                             
                                <p className="bg-light pill-icon ms-3 ">{element}
                                </p>
                                <div className="ms-5 mt-3">
                                      <h6>Rabifast</h6>
                                      <p>Rabiprazol</p>
                                </div>
                               
                             
                                <p className="mt-3 ms-auto">25mg</p>
                             
 
                             
                              <button className="order-btn ms-auto me-4">10 Taka</button>
                             
 
                              </div>
 
                              {/* 3 */}
                              <div className="ms-4 medicine-border d-flex align-items-center mt-3">
                             
                                <p className="bg-light pill-icon ms-3 ">{element}
                                </p>
                                <div className="ms-5 mt-3">
                                      <h6>Rabifast</h6>
                                      <p>Rabiprazol</p>
                                </div>
                               
                             
                                <p className="mt-3 ms-auto">25mg</p>
                             
 
                             
                              <button className="order-btn ms-auto me-4">10 Taka</button>
                             
 
                              </div>
 
                              {/* 4 */}
                              <div className="ms-4 medicine-border d-flex align-items-center mt-3">
                             
                                <p className="bg-light pill-icon ms-3 ">{element}
                                </p>
                                <div className="ms-5 mt-3">
                                      <h6>Rabifast</h6>
                                      <p>Rabiprazol</p>
                                </div>
                               
                             
                                <p className="mt-3 ms-auto">25mg</p>
                             
 
                             
                              <button className="order-btn ms-auto me-4">10 Taka</button>
                             
 
                              </div>
 
                              {/* 5 */}
                              <div className="ms-4 medicine-border d-flex align-items-center mt-3">
                             
                                <p className="bg-light pill-icon ms-3 ">{element}
                                </p>
                                <div className="ms-5 mt-3">
                                      <h6>Rabifast</h6>
                                      <p>Rabiprazol</p>
                                </div>
                               
                             
                                <p className="mt-3 ms-auto">25mg</p>
                             
 
                             
                              <button className="order-btn ms-auto me-4">10 Taka</button>
                             
 
                              </div>
 
 
                          </div>
                          <div class="col-4 container">
                            {/* order detail */}
                              <h5 className=" fw-bolder mt-5">Order  Details</h5>
                                  <div className="details mt-3 px-4 py-3 me-3">
                               
                                  <div className="mt-3">
                                    <div className="row">
                                      <div className="col-7">
                                        <h6 className="fw-bolder">Customer Name</h6>
                                        <p>Md. Kamrul Islam</p>
                                       
                                        <h6 className="fw-bolder">Customer Address</h6>
                                        <p>Bashundara R/A, A Block</p>
 
                                        <h6 className="fw-bolder">Order Item</h6>
                                        <h6 className="fw-normal">Rabifast 25mg</h6>
                                        <p>PPI 25mg</p>
                                        <button className="detail-btn ">Order Processing</button>
                                      </div>
 
                                      <div className="col-5">
                                        <button className="detail-btn ms-auto me-4 ">View Prescription</button>
                                      </div>
 
                                    </div>
 
                                  </div>
                                  </div>
 
 
                                  {/* qr code */}
 
                                  <div className="row mt-5 details p-3 mb-5">
                                    <div className="col-7 ">
                                      <h5 className="fw-bolder mt-4">QR Code</h5>
                                      <h6 className="fw-normal mt-4">Lorem ipsum dolor sit.</h6>
                                      <p>Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div className="col-5">
                                        <h1 className="qr-icon">{qr}</h1>
                                    </div>
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
 

