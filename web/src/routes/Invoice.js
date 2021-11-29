import React from 'react';
import './Invoice.css';
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
 
const Invoice = () => {
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
                              <h4 className="header-sec fw-bold">New Invoice</h4>
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
                        <div className="d-flex">
                        <button className="print-btn ">Print</button>
                        <button className="save-btn ">Save</button>
                       
                        </div>
                       <div className="container ">
                            {/* upperSection */}
                            <section className="container invoice-section">
                                <div className="row">
                                    <div className="col-7 p-4">
                                        <div className="">
                                            <h3>Invoice</h3>
                                            <p>Invoice No #001</p>
                                        </div>
                                        <h5 className="fw-bolder">From</h5>
                                        <p>Bashundara R/A <br />
                                        A Block<br />
                                        Dhaka 1229, Bangladesh</p>
                                        <h5 className="fw-bolder">To</h5>
                                       
                                        <div className="d-flex">
                                        <p>Customer Name: </p>
                                        <input className="customer-name" type="text" placeholder="Kamrul Islam"/>
                                        </div>
                                       
                                        <div className="customer-addres">
                                                <p>Banasri <br />
                                                C Block <br />
                                                Dhaka 1229, Bangladesh</p>
                                        </div>
                                    </div>
 
                                    <div className="col-5">
                                        <div className="pharma-logo ">
                                            <p className="pharma">Pharmacy <br />Logo </p>
                                        </div>
 
                                        <div className="date-box">
                                          <h6 className="fw-bolder">Date</h6>
                                          <input className="date-info" type="text" placeholder="15-07-2021"/>
                                        </div>
 
                                        <div className="order-box">
                                          <h6 className="fw-bolder">Purchase Order Number</h6>
                                          <input className="date-info" type="text" placeholder="001"/>
                                        </div>
                                    </div>
                                </div>
                                <div  className="d-flex align-items-center justify-content-between ">
                                  <div className="d-flex justify-content-start ms-3">
                                    <h6>Name</h6>
                                  </div>
                                  <div className="d-flex justify-content-end">
                                    <h6 className="margin-info">Quantity</h6>
                                    <h6 className="margin-info">Rate</h6>
                                    <h6 className="margin-info">Amount</h6>
                                  </div>
                                </div>
                                <div className="margin-horizental">
                                <hr />
                                </div>
                                <div className="d-flex mb-2">
                                  <textarea className="selling-name" name="name" id="" cols="30" rows="10">Item you are selling</textarea>
 
                                {/* quantity */}
                               
                                <input className="quantity" type="text" placeholder="10"/>
                               {/* Rate */}
                               <input className="rate" type="text" placeholder="10"/>
                               {/* amount */}
                               <input className="rate" type="text" placeholder="1000"/>
                                </div>
                             
                                <div className="margin-hori">
                                <hr />
                                </div>
                                <div className="row">
 
                                  <div className="col-7">
                                    <button className="new-line">+ New Line</button>
                                  </div>
 
                                  <div className="col-5">
                                  <div className="d-flex align-items-center">
                                  <h6>Sub Total</h6>
                                  <p style={{marginRight:"90px"}} className="mt-2 ms-auto">10000</p>
                                  </div>
                                  <div className="margin-horizental">
                                <hr />
                                </div>
 
                                <div style={{marginTop:"-15px"}} className="d-flex align-items-center mb-5">
                                       <div>
                                       <input className="rate-tax" type="text" placeholder="Value Added Tax"/>
                                       <input className="tax" type="text" placeholder="10%"/>
                                       </div>
                                       <p className="ms-auto" style={{marginTop:"12px",marginRight:"90px"}}>100</p>
                                </div>
 
                                <div style={{marginTop:"-40px"}}>
                                <hr />
                                </div>
 
                                <div className="d-flex">
                                  <h6>Total</h6>
                                  <h6 style={{marginRight:"90px"}} className="ms-auto">10100</h6>
                                </div>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <hr />
                                </div>
                                <div className="d-flex">
                                  <h6>Email: <span style={{fontWeight:"400"}}>@northsouth.edu</span></h6>
                                  <h6 className="ms-5">Phone: <span style={{fontWeight:"400"}}>           +8801564964798</span></h6>
                                </div>
                            </section>
                        </div>
 
                    </Col>
                </Row>
 
            </Container>
        </>
    );
};
 
export default Invoice;
 

