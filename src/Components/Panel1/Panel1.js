import React, { useState, useEffect } from 'react';
import './Panel1.css';

export default function Panel1(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previndex) => (previndex === 3 ? 0 : previndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  })

  return (
    <div className='p1panel items-center justify-center'>
    <div className='overflow-hidden w-[45%]' style={{marginBottom: '50px'}}>
      <div className={`flex relative transition ease-out duration-400`} style={{
        transform: `translateX(-${index * 100}%)`
      }}>
        {props.carouselitems.map((s, i) => {
          return <img src={s.url} key={i} alt={`carousel-item-${1}`} />;
        })}
      </div>
      <div className={`flex relative transition ease-out duration-400`} style={{
        transform: `translateX(-${index * 100}%)`
      }}>
        {props.carouselitems.map((s, i) => {
          return <h1>{s.title}</h1>;
        })}
      </div>
    </div>
    </div>
  );
}
