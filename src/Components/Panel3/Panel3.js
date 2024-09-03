import React from 'react';
import './Panel3.css';
import Card from '../Card/Card.js';
import bg1 from '../../Images/bg1.jpeg';
import bg2 from '../../Images/bg2.jpeg';
import bg3 from '../../Images/bg3.jpeg';
import bg4 from '../../Images/bg4.jpeg';
import panel1 from '../../Images/panel1.jpg';

export default function Panel3() {
  return (
    <div className='panel3' style={{backgroundImage: `url(${panel1})`}}>
      <Card heading='Exploration' details='Explore the beauty of nature' image={bg1}/>
      <Card heading='Equipment' details='Find you requirements for your journey' image={bg2}/>
      <Card heading='Guides' details='Take professional guidance' image={bg3}/>
      <Card heading='Adventure' details='Bring out your adventurer' image={bg4}/>
    </div>
  )
}
