import React from "react";      
import {Row, Col, Card} from "react-bootstrap";
import avatar from "../../assets/avatar.svg"

function AppCard (){
  return (
  <>
  <Card className="card-patient">
          <div>
            <Card.Img variant="left" src={avatar}   className= "pat-avatar"/>
          </div>
                                
          <div className="pat-text">
            <Card.Title ><h5>Samiur Rahman</h5></Card.Title>
            <Card.Text><h6>Medical Checkup</h6></Card.Text>
          </div>
          <div className="patient-status">
            <Card.Text><h6>1.00 pm</h6></Card.Text>
          </div>
      
      </Card>
  </>
  )
}

export default AppCard;
                           