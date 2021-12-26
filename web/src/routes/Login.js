import React from "react";
import doctor from "../images/doctor.svg";
import { Link } from "react-router-dom";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import NavbarC from "../components/NavbarC";
import Footer from "../components/Footer";
import React, {useState} from 'react'

var link = {
  color: "blue",
  textDecoration: "none",
};
var register = {
  color: "white",
  padding: "8px 24px",
  backgroundColor: "#268065",
  borderRadius: "7px",
  fontStyle: "bold",
  margin: "20px",
  textDecoration: "none",
};

function Login() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin=(e)=> {
    e.preventDefault()
    if (email == '' & pass == '')
      alert ("Successfully login")
    else
      alert("Wrong credentials")
  }

  return (
    <div style={{ backgroundColor: "#F1F8FF", minHeight: "100vh" }}>
      <NavbarC />

      <Container id="header">
        <Row className="d-flex justify-content-center">
          <Col lg={7} md={6} sm={12}>
            <div className="order-1 order-lg-2 header-img ">
              <img className="img-fluid animated" src={doctor} alt="home img" />
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} className="text-center mt-2 p-3">
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your email" value ={email} onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary" size="lg">
                  Log in
                </Button>
              </div>
              <br />
              <div className="mt-3">
                <Link style={link} to="/changepass">
                  Forgotten password?
                </Link>
                <hr />
                <Link style={register} to="/register">
                  Create New Account
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;
