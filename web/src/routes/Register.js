import React from "react";
import doctor from "../images/doctor.svg";
import { Link } from "react-router-dom";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import NavbarC from "../components/NavbarC";
import Footer from "../components/Footer";

var login = {
  color: "blue",
  textDecoration: "none",
};

function Register() {
  const [fname, setFname] = useState ('')
  const [sname, setSname] = useState ('')
  const [email, setEmail] = useState ('')
  const [pass, setPass] = useState ('')
  const [dob, setDob] = useState ('')
  const [gender, setGender] = useState ('')
  const [user, setUser] = useState ('')

  const handleSignup = (e)=> {
    e.preventDefault()
    if (email =='')
      alert ("Signup Successfully")
    else 
      alert ("That email is already used")
  }

  return (
    <div style={{ backgroundColor: "#F1F8FF", minHeight: "100vh" }}>
      <NavbarC />
      <Container id="header">
        <Row className="d-flex justify-content-center">
          <Col lg={7} md={6} sm={12}>
            <div className="order-1 order-lg-2 header-img ">
              <img className="img-fluid animated" src={doctor} />
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="text-center mt-1 ">
            <Form onSubmit = {handleSignup}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row className="g-2">
                  <Col md>
                    <Form.Control type="text" placeholder="First name" value = {fname}  onChange={(e) => setFname(e.target.value)}/>
                  </Col>
                  <Col md>
                    <Form.Control type="text" placeholder="Surname" value = {sname}  onChange={(e) => setSname(e.target.value)}/>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter address" value = {email}  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="New Password" value = {pass}  onChange={(e) => setPass(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="dob">
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth" value = {dob} onChange={(e) => setDob(e.target.value)}
                />
              </Form.Group>

              <Row className="mb-2">
                <Form.Group as={Col}>
                  <Col xs="auto" className="my-1">
                    <Form.Label className="d-flex justify-content-start p-1">
                      {" "}
                      Gender
                    </Form.Label>
                    <Form.Select
                      className="me-sm-2"
                      id="inlineFormCustomSelect" value = {gender} onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="0">Male</option>
                      <option value="1">Female</option>
                      <option value="2">Others</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Col}>
                  <Col xs="auto" className="my-1">
                    <Form.Label className="d-flex justify-content-start p-1">
                      {" "}
                      User type
                    </Form.Label>
                    <Form.Select
                      className="me-sm-2"
                      id="inlineFormCustomSelect" value = {user} onChange={(e) => setUser(e.target.value)}
                    >
                      <option value="0">Patient</option>
                      <option value="1">Doctor</option>
                      <option value="2">Pharmacy</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>

              <div className="d-grid gap-2">
                <Button type="submit" variant="primary" size="lg">
                  Sign Up
                </Button>
              </div>

              <div className="mt-3">
                <Link style={login} to="/login">
                  Already Have an account?
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

export default Register;
