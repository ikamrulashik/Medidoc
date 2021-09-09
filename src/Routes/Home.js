import React from 'react'
import {Navbar, Col, Container, Row, Form, Button} from "react-bootstrap"
import logo from '../logo.svg'
import {Link} from 'react-router-dom'
import doctor from '../images/doctor.png'

var button ={
    color: "white",
    padding: "8px 24px",
    backgroundColor: "#268065",
    borderRadius: "7px",
    fontStyle: "bold",
    margin: "20px",
    textDecoration: "none"
}

function Home (){
    return (
        <div style={{backgroundColor:"#F1F8FF", minHeight: "100vh"}}>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/"><img className= "icon" src={logo} alt="icon"/></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/register">Signup</Link>
                        <br/>
                        <Link to="/login">Login</Link>

                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row >
                    <Col lg={6} md={6} sm={12}>
                        
                        <div className="mt-5">
                        <h3 className="jusify-content-left">MediDoc combines all the required healthcare services in a single platform. The system will connect the Doctors, Patients and the Pharmacy and will contains different interface for each type.</h3>
                        </div>
                        
                    </Col>
                    <Col lg={6} md={6} sm={12} className="text-center mt-2 p-3">
                        <br/>
                        
                        <div className="mt-5">
                            <img className="w-100" src={doctor}/>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;