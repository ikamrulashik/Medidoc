import React, {useState} from 'react' 
import {Col, Container, Form, Button, Row} from 'react-bootstrap'

function Appointment() {
    const [name, setName] = useState('')
    const [cont, setCont] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [doc, setDoc] = useState('')

    const handleAppointment = (e)=> {
        e.preventDefault()
        if (name == '')
            alert ("Appointment Successfully")
        else
            alert ("You've already booked an appointment")
    }
    return <div style={{backgroundColor:"#99EDC3", minHeight: "100vh"}}>
        <Container id="header">
                <Row className="d-flex justify-content-center">
                    <Col lg={7} md={6} sm={12}>
                        <div className="order-1 order-lg-2 header-img ">
                            <img className="d"  alt="home img" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="text-center mt-2 p-3">
                        <Form onsubmit = {handleAppointment}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Your Name" value = {name} onChange={(e) => setName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridContact">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="text" placeholder="Your Contact Number" value = {cont} onChange={(e) => setCont(e.target.value)}/>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Time</Form.Label>
                                <Form.Control type = "time" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)}/>
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
                                <Form.Select defaultValue="Choose..." value={doc} onChange={(e) => setDoc(e.target.value)}>
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
