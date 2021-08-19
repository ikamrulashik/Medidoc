import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Routes/Login'
import Register from './Routes/Register'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register}/>
      </BrowserRouter>    
    </div>
  );
}

export default App;
