import React from 'react';
import './Customer.css';
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
import { Pagination } from '@mui/material';
 
const Customer = () => {
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
                          <Nav.Link  eventKey="link-2">
                              <h4 className="header-sec">Customer</h4>
                          </Nav.Link>
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
                     
                      </div>
                           
                       
 
                      {/* section */}
                        <div className="row container">
                                <div className="col-4 mt-5">
                                <Pagination count={3} color="primary" />
                                </div>
                               
                                <div className="col-8 mt-5 medicine-btn-pos d-flex justify-content-end">
                               
                                    <button className="medicine-upload-btn">Add Customer</button>
                                   
                                </div>  
                                <div>
                                  <input className="medicine-input-box ms-auto" type="text"/>
                                  <button className="medicine-search-button">
                                    <img src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png" alt=""/>
                                  </button>
                                  </div>
                        </div>  
 
                        <div className="mt-4 d-flex justify-content-between container">
                                <div className="ms-5 d-flex justify-content-evenly">
                                    <h6 className="me-5">Customer Name</h6>
                                    <h6 className="me-5">Customer ID</h6>
                                    <h6 className="me-5">Address</h6>
                                    <h6 className="phone-number me-5">Phone Number</h6>
                                    <h6 className="prescription me-5">E-prescription</h6>
                                </div>
                                <div className="me-5">
                                    <h6 className="me-5">Action</h6>
                                </div>
                        </div>
                     
                      {/* customer list */}
                      <div className=" medicine-medicine-border d-flex align-items-center mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div className="customer-info">
                                  <h6>Kamrul</h6>
                                   
                                  </div>
                                   <p className="customer-id ">001</p>
                                   <p className="customer-address">Bashundhara R/A</p>
                                   <p className="customer-number">012345678</p>
                                   <button className="e-prescription">View Prescription</button>
                             </div>
                             
                           <div className="ms-auto">
                           
                           <button className="delete-btn ">Delete</button>
                           </div>
                           
                           </div>
 
                           {/* 2 */}
                           <div className=" medicine-medicine-border d-flex align-items-center mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div className="customer-info">
                                  <h6>Kamrul</h6>
                                   
                                  </div>
                                   <p className="customer-id ">001</p>
                                   <p className="customer-address">Bashundhara R/A</p>
                                   <p className="customer-number">012345678</p>
                                   <button className="e-pres">No Prescription</button>
                             </div>
                             
                           <div className="ms-auto">
                           
                           <button className="delete-btn ">Delete</button>
                           </div>
                           
                           </div>
 
                           {/* 3 */}
                           <div className=" medicine-medicine-border d-flex align-items-center mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div className="customer-info">
                                  <h6>Kamrul</h6>
                                   
                                  </div>
                                   <p className="customer-id ">001</p>
                                   <p className="customer-address">Bashundhara R/A</p>
                                   <p className="customer-number">012345678</p>
                                   <button className="e-prescription">View Prescription</button>
                             </div>
                             
                           <div className="ms-auto">
                           
                           <button className="delete-btn ">Delete</button>
                           </div>
                           
                           </div>
                           {/* 4 */}
                           <div className=" medicine-medicine-border d-flex align-items-center mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div className="customer-info">
                                  <h6>Kamrul</h6>
                                   
                                  </div>
                                   <p className="customer-id ">001</p>
                                   <p className="customer-address">Bashundhara R/A</p>
                                   <p className="customer-number">012345678</p>
                                   <button className="e-prescription">View Prescription</button>
                             </div>
                             
                           <div className="ms-auto">
                           
                           <button className="delete-btn ">Delete</button>
                           </div>
                           
                           </div>
                           {/* 5 */}
                           <div className=" medicine-medicine-border d-flex align-items-center mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div className="customer-info">
                                  <h6>Kamrul</h6>
                                   
                                  </div>
                                   <p className="customer-id ">001</p>
                                   <p className="customer-address">Bashundhara R/A</p>
                                   <p className="customer-number">012345678</p>
                                   <button className="e-prescription">View Prescription</button>
                             </div>
                             
                           <div className="ms-auto">
                           
                           <button className="delete-btn ">Delete</button>
                           </div>
                           
                           </div>
                           {/* 6 */}
                           <div className=" medicine-medicine-border d-flex align-items-center mb-5">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div className="customer-info">
                                  <h6>Kamrul</h6>
                                   
                                  </div>
                                   <p className="customer-id ">001</p>
                                   <p className="customer-address">Bashundhara R/A</p>
                                   <p className="customer-number">012345678</p>
                                   <button className="e-pres">No Prescription</button>
                             </div>
                             
                           <div className="ms-auto">
                           
                           <button className="delete-btn ">Delete</button>
                           </div>
                           
                           </div>
 
                           
                         
                           
                         
                    </Col>
                </Row>
 
            </Container>
        </>
    );
};
 
export default Customer;
 

