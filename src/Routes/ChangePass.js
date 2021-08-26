import React from 'react'
import logo from '../logo.svg'
import doctor from '../images/doctor.png'
import {Link} from 'react-router-dom'
import {Col, Container, Row, Form, Button} from "react-bootstrap"

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
            <Container className>
                <Row className="d-flex justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                        <div className="mt-5">
                            <img className="w-100" src={doctor}/>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <br/>
                        <img className= "icon" src={logo} alt="icon"/>
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
                                        <Link style={login} to="/">Log in</Link>                            
                               </Form.Group>
                                <Form.Group  as={Col} >                 
                                    <Link style={cancel} to="/">Cancel</Link>
                                </Form.Group>
                           </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ChangePass;