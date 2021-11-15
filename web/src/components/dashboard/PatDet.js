import React from 'react'
import {Row, Col, Card} from "react-bootstrap";
import avatar from "../../assets/avatar.svg"
import {Link} from 'react-router-dom'

function PatDet (){
    return (
        <div>
            <Card  className="card-npd"> 
                <div>
                <Card.Img variant="left" src={avatar}   className= "pat-avatar"/>
                </div>
                <div className="patient-header">
                    <h4>Kamrul Ashik</h4>
                    <h6>Bashundhara, Dhaka</h6>
                    <Link to="/videocall" className="patient-call btn btn-outline-secondary">Video Call</Link>
                </div>
                <div className="patient-details">
                    <Row xs={1} md={3} >
                        <Col>
                        <h5>Date of Birth</h5>
                        <p> 18 december 1997</p>
                        </Col>
                        <Col>
                        <h5>Sex</h5>
                        <p>Male</p>
                        </Col>
                        <Col>
                        <h5>Weight</h5>
                        <p>65</p>
                        </Col>
                    </Row> 
                </div>
                <div className="btn-ptnt">
                    <Link className="btn btn-outline-secondary" to="/documents"> Documents</Link>
                    <div className="divider"/>
                    <Link className="btn btn-outline-secondary" to="/prescription"> E-Prescription</Link>
                </div>
            </Card>
            
        </div>
    )
    
}

export default PatDet;