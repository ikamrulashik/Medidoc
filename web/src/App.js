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

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={apiResponse: ""};
  }

  callAPI() {
    fetch("https://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/changepass" component={ChangePass}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/patient" component={PatientHome}/>
        <Route exact path="/doctor" component={Doctor}/>
  
        </BrowserRouter> 
        <p>{this.state.apiResponse}</p>   
      </div>
    );
  }

}



export default App;
