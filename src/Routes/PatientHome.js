import React from 'react'
import PNav from '../components/PNav';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'

function PatientHome() {
    return <div style={{backgroundColor:"#F1F8FF", minHeight: "100vh"}}>
        <PNav/>
        
       

        <Footer/>
    </div>
}

export default PatientHome;