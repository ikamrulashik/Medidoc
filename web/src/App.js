import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login' 
import Register from './routes/Register'
import ChangePass from './routes/ChangePass'
import PatientHome from './routes/PatientHome';
import Doctor from './routes/Doctor';
import React from 'react';
import { render } from 'react-dom';
import VideoCall from './routes/VideoCall';
import Pharmacy from './routes/Pharmacy';
import Medicine from './routes/Medicine';
import Customer from './routes/Customer';
import Invoice from './routes/Invoice';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/changepass" component={ChangePass}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/patient" component={PatientHome}/>
        <Route exact path="/doctor" component={Doctor}/>
        <Route exact path="/pharmacy" component={Pharmacy}/>
        <Route exact path="/customer" component={Customer}/>
        <Route exact path="/invoice" component={Invoice}/>
        <Route exact path="/medicine" component={Medicine}/>
        <Route exact path="/videocall" component={VideoCall}/>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
