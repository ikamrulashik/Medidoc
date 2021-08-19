import React from 'react'
import logo from '../logo.svg'
import doctor from '../images/doctor.png'
import {Link} from 'react-router-dom'

var link={
    color: "blue",
    textDecoration: "none"
}
var register={
    color: "white",
    padding: "8px 24px",
    backgroundColor: "#268065",
    borderRadius: "7px",
    fontStyle: "bold",
    margin: "20px",
    textDecoration: "none"
}
var form={
    padding: "50px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
}

function Login(){
    return <div style={{backgroundColor: "F1F8FF"}}>
       <div className="row mt-5">
           <div className="col-md-6">
               <img src={logo} width="200" mt-5 p-5/>
               <img src={doctor} width="500" mt-10 p-20/>            
           </div>
           <div className="col-md-6 my-auto p-5 rounded" style={{float: "left"}}>
            <form style={form}>            
                <input type="email" className="form-control" placeholder="Enter address or phone number"/>
                <br/>
                <input type="password" className="form-control" placeholder="Password"/>  
                <br/>
                <button type="submit" className="btn btn-primary">Log in</button>
                <br/>
                <Link style={link} to="/">Forgotten password?</Link>
                <hr/>
                <Link style={register} to="/register">Create New Account</Link>

            </form>
           </div>
       </div>
    </div>
}

export default Login;