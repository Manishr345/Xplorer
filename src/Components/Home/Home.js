import React from 'react'
import Panel1 from '../Panel1/Panel1.js';
import Panel2 from '../Panel2/Panel2.js';
import Panel3 from '../Panel3/Panel3.js';
import carousel1 from '../../Images/carousel1.jpg';
import carousel2 from '../../Images/carousel2.jpg';
import carousel3 from '../../Images/carousel3.avif';
import carousel4 from '../../Images/carousel4.jpg';
import carousel5 from '../../Images/carousel5.avif';
import carousel6 from '../../Images/carousel6.avif';
import carousel7 from '../../Images/carousel7.avif';
import carousel8 from '../../Images/carousel8.avif';

export default function Home() {
    const carouselitems = [
        carousel1,
        carousel2,
        carousel3,
        carousel4,
        carousel5,
        carousel6,
        carousel7,
        carousel8
      ]
  return (
    <div>
        <Panel1 carouselitems={carouselitems}/>
        <Panel2/>
        <Panel3/>
    </div>
  )
}
