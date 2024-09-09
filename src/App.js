import './App.css';
import {BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import About from './Components/About/About.js';
import Home from './Components/Home/Home.js';
import { getConfig } from '@testing-library/react';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
