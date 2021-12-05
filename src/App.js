// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Login from './Components/Login';
import Main from './Components/Main';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <Router>
       <Navbar/>
    <div className="App">
      <Switch>
      <Route path="/main">
          <Main/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
