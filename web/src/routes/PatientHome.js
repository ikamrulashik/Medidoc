import React from 'react'
import PNav from '../components/PNav';
import Footer from '../components/Footer';
import patienthome from '../images/docpatient.svg'
import Appointment from '../components/appointment/Appointment'
import {Card, CardGroup} from 'react-bootstrap'
import appointment from '../assets/icons/appointment.svg';
import emergency from '../assets/icons/emergency.svg';
import service from '../assets/icons/service.svg';

import {Link} from 'react-router-dom'


function PatientHome() {
    return <div style={{backgroundColor:"#99EDC3", minHeight: "100vh"}}>
        <PNav/>
        <section id="patient-title" className="d-flex align-items-center">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>Good health is the root of all <strong className="brand-name">Happiness</strong></h1>
                                
                                <div className="mt-3">
                                    <Link to ="#" className="btn-get">Book Appointment</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img className="img-fluid animated" src={patienthome} alt="docpatient img"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
            <section>
            <CardGroup>
  <Card className= "patient-service">
    <Card.Img variant="top" src={appointment} width={80} height={80}/>
    <Card.Body>
      <Card.Title>Easy Appointment</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className= "patient-service">
    <Card.Img variant="top" src={emergency} width={80} height={80}/>
    <Card.Body>
      <Card.Title>Emergency Services</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className= "patient-service">
    <Card.Img variant="top" src={service} width={80} height={80}/>
    <Card.Body>
      <Card.Title>24/7 Service</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
                </section>    
                <section id="#"> 
                    <Appointment/>
                </section>
               
       

        <Footer/>
    </div>
}

export default PatientHome;