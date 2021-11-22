import React from 'react'
import {Row, Col, Card} from "react-bootstrap";
import avatar from "../../assets/avatar.svg"
import accept from "../../assets/accept.svg"
import reject from "../../assets/reject.svg"
import { Link } from 'react-router-dom';


function Appointment () {
    return (
        <div>
            <Card className="card-patient">
          <div>
            <Card.Img variant="left" src={avatar}   className= "pat-avatar"/>
          </div>
                                
          <div className="pat-text">
            <Card.Title ><h5>Kamrul Ashik</h5></Card.Title>
            <Card.Text><h6>Medical Checkup</h6></Card.Text>
          </div>
          <div className="patient-status">
            <Link className="btn btn-link"><img src={accept}/></Link>
             <div className="divider"/>
            <Link><img src={reject}/></Link>
          </div>
      
      </Card>

        </div>
    )
}

export default Appointment;