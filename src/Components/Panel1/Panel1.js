import React, { useState, useEffect } from 'react';
import './Panel1.css';

export default function Panel1(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previndex) => (previndex === 5 ? 0 : previndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  })

  return (
    <div className='p1panel items-center justify-center'>
    <div className='overflow-hidden w-[100%] h-[100%]'>
      <div className={`flex relative transition ease-out duration-400`} style={{
        transform: `translateX(-${index * 100}%)`, opacity: '0.5'
      }}>
        {props.carouselitems.map((s, i) => {
          return <img src={s} key={i} alt={`carousel-item-${1}`} />;
        })}
      </div>
      <div className='absolute flex inset-0 justify-center items-center text-white p1text font-serif tracking-widest'>
        <h1 style={{border: '2px solid black', width: '800px'}}>Xplorer</h1>
      </div>
        <h2 className='text-white mt-3 font-mono tracking-tight text-xl'>Buckle up for the amazing journey!!</h2>
    </div>
    </div>
  );
}
