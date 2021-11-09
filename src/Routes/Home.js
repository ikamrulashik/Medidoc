import React from 'react'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'
import home from '../images/home.svg'
import Footer from '../components/Footer'
import NavbarC from '../components/NavbarC';

function Home (){
    return (
        <div style={{backgroundColor:"#F1F8FF", minHeight: "100vh"}}>
            <NavbarC/>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>Help yourself for getting a healthy life with <strong className="brand-name">MediDoc</strong></h1>
                                <h2 className="my-3">Your complete health partner</h2>
                                <div className="mt-3">
                                    <Link to ="/login" className="btn-get">Get Started</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img className="img-fluid animated" src={home} alt="home img"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>             
        <Footer/>
        </div>
    )
}

export default Home;