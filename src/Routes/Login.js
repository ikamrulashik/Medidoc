import React from 'react'
import logo from '../logo.svg'
import doctor from '../images/doctor.png'
import {Link} from 'react-router-dom'
import {Col, Container, Row, Form, Button} from "react-bootstrap"
import Footer from '../Footer'

var icon={
    width:"300px",
    height: "70px",
    marginBotton: "3rem"
}
var link={
    color: "blue",
    textDecoration: "none"
}
var register={
    color: "white",
    padding: "8px 24px",
    backgroundColor: "#268065",
    borderRadius: "7px",
    fontStyle: "bold",
    margin: "20px",
    textDecoration: "none"
}

function Login () {
    return ( 
        <div style={{backgroundColor:"#F1F8FF", minHeight: "100vh"}}>
            <Container className>
                <Row className="d-flex justify-content-center">
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <br/>
                        <img style = {icon} src={logo} alt="icon"/>
                        <Form>
                            <Form.Group  className="mb-3" controlId="formBasicEmail">     
                                <Form.Control type="email" placeholder="Your email" />
                            </Form.Group>

                            <Form.Group  className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button type="submit"variant="primary" size="lg">Log in</Button>
                            </div>
                            <br/>
                            <div className="mt-3">
                                <Link style={link} to="/">Forgotten password?</Link>
                                <hr/>
                                <Link style={register} to="/register">Create New Account</Link>
                            </div>
                        </Form>

                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <div className="mt-5">
                            <img className="w-100" src={doctor}/>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
            <Footer/>

        </div>
    )
}

export default Login;