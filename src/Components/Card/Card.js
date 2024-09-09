import React from 'react'
import './Card.css'
export default function Card(props) {
  return (
    <div className='card'>
      <div className='cardimage'><img src={props.image} alt='error'/></div>
      <div className='info'>
      <h3 style={{color: 'white', fontSize: '20px'}}>{props.heading}</h3>
      <br/>
      <h4 style={{color: 'white'}}>{props.details}</h4>
      </div>
    </div>
  )
}
