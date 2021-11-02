import React from 'react'
import logo from '../logo.svg'
import doctor from '../images/doctor.svg'
import {Link} from 'react-router-dom'
import {Col, Container, Row, Form, Button} from "react-bootstrap"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


var login={
    color: "white",
    padding: "8px 24px",
    backgroundColor: "#268065",
    borderRadius: "7px",
    fontStyle: "bold",
    margin: "20px",
    textDecoration: "none"
}
var cancel={
    color: "white",
    padding: "8px 24px",
    backgroundColor: "#CD001A",
    borderRadius: "7px",
    fontStyle: "bold",
    margin: "20px",
    textDecoration: "none"

}
function ChangePass () {
    return ( 
        <div style={{backgroundColor:"#F1F8FF", minHeight: "100vh"}}>
            <Navbar/>
            <Container id="header">
                <Row className="d-flex justify-content-center">
                    <Col lg={7} md={6} sm={12}>
                        <div className="order-1 order-lg-2 header-img ">
                            <img className="img-fluid animated" src={doctor}  alt="home img" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <Form>
                            <Form.Group  className="mb-3" controlId="formBasicEmail">     
                                <Form.Control type="email" placeholder="Your email" />
                            </Form.Group>
                           <div className="d-grid gap-2">
                            <Button type="submit"variant="primary" size="lg">Reset Password</Button>
                           </div>
                           <br/>
            
                        </Form>
                        <div className="d-flex justify-content-start" >
                                <Form.Group  as={Col} >                                   
                                        <Link style={login} to="/login">Log in</Link>                            
                               </Form.Group>
                                <Form.Group  as={Col} >                 
                                    <Link style={cancel} to="/">Cancel</Link>
                                </Form.Group>
                           </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default ChangePass;