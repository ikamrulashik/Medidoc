import React from 'react'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'

function Navbar (){
    return (
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className ="navbar navbar-expand-lg navbar-light ">
                       
                        <Link to="/"> <img className= "navbar-brand" src={logo} alt="icon"/></Link>
                       
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li><Link  to="/login"><button class="btn btn-outline-primary">Login </button></Link></li>
                                    <li><Link  to="/register"><button class="btn btn-outline-primary">Signup</button></Link></li>
                                </ul>
                            </div>
                        
                    </nav>
                </div>
            </div> 
        </div>
      
    )
}

export default Navbar;