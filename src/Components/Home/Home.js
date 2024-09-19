import React from 'react'
import Panel1 from '../Panel1/Panel1.js';
import Panel2 from '../Panel2/Panel2.js';
import Panel3 from '../Panel3/Panel3.js';
import Foot from '../Footer/Foot.js';
import carousel1 from '../../Images/carousel1.jpg';
import carousel2 from '../../Images/carousel2.jpg';
import carousel3 from '../../Images/carousel3.avif';
import carousel4 from '../../Images/carousel4.jpg';
import carousel5 from '../../Images/carousel5.avif';
import carousel6 from '../../Images/carousel6.avif';
import carousel7 from '../../Images/carousel7.avif';
import carousel8 from '../../Images/carousel8.avif';
import carousel9 from '../../Images/carousel9.avif';
import carousel10 from '../../Images/carousel10.avif';
import carousel11 from '../../Images/carousel11.avif';
import carousel12 from '../../Images/carousel12.avif';

export default function Home(props) {
    const carouselitems = [
        carousel1,
        carousel2,
        carousel3,
        carousel4,
        carousel5,
        carousel6,
        carousel7,
        carousel8,
        carousel9,
        carousel10,
        carousel11,
        carousel12
      ]

      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    props.shownav && <div>
        <Panel1 carouselitems={carouselitems}/>
        <Panel2/>
        <Panel3/>
        <Foot/>
    </div>
  )
}
