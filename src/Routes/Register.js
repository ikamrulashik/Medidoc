import React from 'react'
import logo from '../logo.svg'
import doctor from '../images/doctor.svg'
import {Link} from 'react-router-dom'
import {Col, Container, Row, Form, Button} from "react-bootstrap"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



var login={
    color: "blue",
    textDecoration: "none"
}

function Register() {
    return ( 
        <div style={{backgroundColor:"#F1F8FF", minHeight: "100vh"}}>
            <Navbar/>
            <Container id="header">
                <Row className="d-flex justify-content-center">
                    <Col lg={7} md={6} sm={12}>
                        <div className="order-1 order-lg-2 header-img ">
                            <img className="img-fluid animated" src={doctor}/>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="text-center mt-1 ">
                        
                        <Form>
                            <Form.Group  className="mb-3" controlId="formBasicEmail"> 
                                <Row className="g-2">
                                    <Col md>
                                            <Form.Control type="text" placeholder="First name" />  
                                    </Col>
                                    <Col md>
                                        <Form.Control type="text" placeholder="Surname" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            
                            <Form.Group  className="mb-3" controlId="formBasicEmail">     
                                <Form.Control type="text" placeholder="Enter address or phone number" />
                            </Form.Group>

                            <Form.Group  className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="New Password" />
                            </Form.Group>

                            <Form.Group controlId="dob">
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                            </Form.Group>
                            
                            <Row className="mb-2">
                                <Form.Group  as={Col} >
                                    <Col xs="auto" className="my-1">
                                        <Form.Label className="d-flex justify-content-start p-1"> Gender</Form.Label>
                                        <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                            <option value="0">Male</option>
                                            <option value="1">Female</option>
                                            <option value="2">Others</option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                                <Form.Group as= {Col}>
                                    <Col xs="auto" className="my-1">
                                        <Form.Label className="d-flex justify-content-start p-1"> User type</Form.Label>
                                        <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                            <option value="0">Patient</option>
                                            <option value="1">Doctor</option>
                                            <option value="2">Pharmacy</option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                                
                            </Row>    
                            

                            
                            <div className="d-grid gap-2">
                                <Button type="submit"variant="primary" size="lg">Sign Up</Button>
                            </div>
                            
                            <div className="mt-3">
                                <Link style={login} to="/login">Already Have an account?</Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Register;