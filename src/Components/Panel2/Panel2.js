import React from 'react';
import './Panel2.css'
import tracking from '../../Images/tracking.jpeg'

export default function Panel2() {
  return (
    <div className='panel2 mt-20 mb-20'>
      <div className='p2image'>
        <img src={tracking}/>
      </div>
      <div className='p2details pt-60'>
        <h2 className='font-bold' style={{fontSize: '25px'}}>Why visit Xplorer before starting your explorations ?</h2>
        <br/>
        <hr style={{height: '3px'}}/>
        <br/>
        <p style={{padding: '30px', fontSize: '20px'}}>Xplorer provides everything you need to make your trip successful and memorable. From Local places to Global,
        From Nearby places to miles away, From Geography to History of the various locations. From Mountains to Waterfalls,
        Forests, Hiking and many other exciting activities..!!</p>
      </div>
    </div>
  )
}
