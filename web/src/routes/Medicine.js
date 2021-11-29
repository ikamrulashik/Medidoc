import React from 'react';
import './Medicine.css';
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
 
const Medicine = () => {
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
                              <h4 className="header-sec">Medicine</h4>
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
                               
                                    <button className="medicine-medicine-btn">+ Add Medicine</button>
                                    <button className="medicine-upload-btn">+ Upload</button>
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
                                    <h6 className="me-5">Item</h6>
                                    <h6 className="me-5">MRP</h6>
                                    <h6 className="me-5">Expiry Date</h6>
                                    <h6 className="me-5">Composition</h6>
                                </div>
                                <div className="me-5">
                                    <h6 className="me-5">Action</h6>
                                </div>
                        </div>
                     
                      {/* medicine list */}
                      <div className=" medicine-medicine-border d-flex align-items-center mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div>
                                  <h6>Rabifast</h6>
                                   <p className="medicine-grp">Rabiprazol</p>
                                  </div>
                                   <p className="mrp mt-2">25mg</p>
                                   <p className="composition"></p>
                             </div>
                             
                           <div className="ms-auto">
                           <button className="order-btn ms-auto me-3">Select as Out of stock</button>
                           <button className="edit-btn me-3">Edit</button>
                           <button className="delete-btn me-3">Delete</button>
                           </div>
                           
                           </div>
 
                           {/* 2 */}
                           <div className=" medicine-medicine-border d-flex align-items-center mt-1 mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div>
                                  <h6>Rabifast</h6>
                                   <p className="medicine-grp">Rabiprazol</p>
                                  </div>
                                   <p className="mrp mt-2">25mg</p>
                                   <p className="composition"></p>
                             </div>
                             
                           <div className="ms-auto">
                           <button className="order-btn ms-auto me-3">Select as Out of stock</button>
                           <button className="edit-btn me-3">Edit</button>
                           <button className="delete-btn me-3">Delete</button>
                           </div>
                           
                           </div>
 
                           {/* 3 */}
                           <div className=" medicine-medicine-border d-flex align-items-center mt-3 mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div>
                                  <h6>Rabifast</h6>
                                   <p className="medicine-grp">Rabiprazol</p>
                                  </div>
                                   <p className="mrp mt-2">25mg</p>
                                   <p className="composition"></p>
                             </div>
                             
                           <div className="ms-auto">
                           <button className="stock-btn ms-auto me-3">Out of stock</button>
                           <button className="edit-btn me-3">Edit</button>
                           <button className="delete-btn me-3">Delete</button>
                           </div>
                           
                           </div>
                           {/* 4 */}
                           <div className=" medicine-medicine-border d-flex align-items-center mt-3 mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div>
                                  <h6>Rabifast</h6>
                                   <p className="medicine-grp">Rabiprazol</p>
                                  </div>
                                   <p className="mrp mt-2">25mg</p>
                                   <p className="composition"></p>
                             </div>
                             
                           <div className="ms-auto">
                           <button className="order-btn ms-auto me-3">Select as Out of stock</button>
                           <button className="edit-btn me-3">Edit</button>
                           <button className="delete-btn me-3">Delete</button>
                           </div>
                           
                           </div>
                           {/* 5 */}
                           <div className=" medicine-medicine-border d-flex align-items-center mt-3 mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div>
                                  <h6>Rabifast</h6>
                                   <p className="medicine-grp">Rabiprazol</p>
                                  </div>
                                   <p className="mrp mt-2">25mg</p>
                                   <p className="composition"></p>
                             </div>
                             
                           <div className="ms-auto">
                           <button className="order-btn ms-auto me-3">Select as Out of stock</button>
                           <button className="edit-btn me-3">Edit</button>
                           <button className="delete-btn me-3">Delete</button>
                           </div>
                           
                           </div>
                           {/* 6 */}
                           <div className=" medicine-medicine-border d-flex align-items-center mt-3 mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div>
                                  <h6>Rabifast</h6>
                                   <p className="medicine-grp">Rabiprazol</p>
                                  </div>
                                   <p className="mrp mt-2">25mg</p>
                                   <p className="composition"></p>
                             </div>
                             
                           <div className="ms-auto">
                           <button className="order-btn ms-auto me-3">Select as Out of stock</button>
                           <button className="edit-btn me-3">Edit</button>
                           <button className="delete-btn me-3">Delete</button>
                           </div>
                           
                           </div>
                    </Col>
                </Row>
 
            </Container>
        </>
    );
};
 
export default Medicine;
 

