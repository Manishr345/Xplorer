import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Panel1 from './Components/Panel1/Panel1.js';
import Panel2 from './Components/Panel2/Panel2.js';
import Panel3 from './Components/Panel3/Panel3.js';
import carousel1 from './Images/carousel1.jpg';
import carousel2 from './Images/carousel2.jpg';
import carousel3 from './Images/carousel3.png';
import carousel4 from './Images/carousel4.jpg';

function App() {
  const carouselitems = [
    {url: carousel1, title: 'This is beach'},
    {url: carousel2, title: 'This is beach'},
    {url: carousel3, title: 'This is beach'},
    {url: carousel4, title: 'This is beach'}
  ]
  
  return (
    <div className="App">
      <Navbar/>
      <Panel1 carouselitems={carouselitems}/>
      <Panel2/>
      <Panel3/>
    </div>
  );
}

export default App;
