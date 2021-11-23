import React from 'react' 
import {Col, Container, Form, Button, Row} from 'react-bootstrap'


function Appointment() {
    return <div style={{backgroundColor:"#99EDC3", minHeight: "100vh"}}>
        <Container id="header">
                <Row className="d-flex justify-content-center">
                    <Col lg={7} md={6} sm={12}>
                        <div className="order-1 order-lg-2 header-img ">
                            <img className="d"  alt="home img" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="text-center mt-2 p-3">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="password" placeholder="Your Contact Number" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Date</Form.Label>
                                <Form.Control placeholder="Date" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Time</Form.Label>
                                <Form.Control placeholder="Time" />
                            </Form.Group>

                            <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Specialist</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Doctors</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Dr. Ashik</option>
                                    <option>Dr. Salman</option>
                                </Form.Select>
                                </Form.Group>


                            </Row>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>

                        </Col>
                    </Row>
                            

    </Container>
    </div>
     }
export default Appointment;
