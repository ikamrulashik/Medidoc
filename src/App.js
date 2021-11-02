import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login' 
import Register from './routes/Register'
import ChangePass from './routes/ChangePass'
import DocHome from './routes/DocHome';
import Pharmacy from './routes/Pharmacy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/changepass" component={ChangePass}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/doctor" component={DocHome}/>
      <Route exact path="/pharmacy" component={Pharmacy}/>
      {/* <Redirect to ="/" /> */}
      </BrowserRouter>    
    </div>
  );
}

export default App;
