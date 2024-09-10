import './App.css';
import {BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import About from './Components/About/About.js';
import Home from './Components/Home/Home.js';
import { getConfig } from '@testing-library/react';
import Signup from './Components/Signup/Signup.js';
import Login from './Components/Login/Login.js';
import { useState } from 'react';

function App() {
  const [shownav, setShowNav] = useState(null);
  const [loggedin, setLoggedin] = useState(null);
  const licontinueButton = () => {
    alert('You are successfully logged in!!');
    setShowNav(1)
    setLoggedin(null);
  }
  return (
    <Router>
      <div className="App">
        <Navbar shownav={shownav}/>
        <Signup setLoggedin={setLoggedin}/>
      <Routes>
        <Route exact path='/home' element={<Home shownav={shownav}/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/signup' element={<Signup setLoggedin={setLoggedin}/>}></Route>
        <Route exact path='/login' element={<Login licontinueButton={licontinueButton} loggedin={loggedin}/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
