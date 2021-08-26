import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './routes/Login'
import Register from './routes/Register'
import ChangePass from './routes/ChangePass'
import DocHome from './routes/DocHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Login}/>
      <Route exact path="/changepass" component={ChangePass}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/home" component={DocHome}/>
      </BrowserRouter>    
    </div>
  );
}

export default App;
