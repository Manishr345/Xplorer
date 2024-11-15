import React, { useState } from 'react'
import logo from './logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar(props) {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [burger, setBurger] = useState(0);
  const burgerClicked = () => {
    setBurger(!burger);
  }

  return (
    props.shownav && <div className={`xl:h-[80px] ${burger?'h-[500px]':'h-[120px]'} mt-[10px] w-full mb-[20px] flex flex-col xl:flex-row justify-center xl:justify-between sticky z-[1000] top-0`} style={{ backgroundColor: '#203130' }}>
      <div className='absolute left-5 top-5 xl:relative xl:top-auto xl:left-auto h-[80px] w-[100px]'>
        <img className='h-full w-full' src={logo} alt='error hai' />
      </div>
      <button className='absolute top-7 xl:hidden right-12' onClick={burgerClicked}><svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#f7f7f8" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></button>
      <div id='space'></div>
      <div className={`${burger?'flex':'hidden'} xl:flex justify-center align-middle space-x-2`}>
        <div className='mt-7'><svg xmlns="http://www.w3.org/2000/svg" height="24" width="27" viewBox="0 0 576 512"><path fill="#fcfcfc" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg></div>
        <Link to='/home' className='flex align-middle text-2xl justify-center no-underline text-white pt-[10px] pb-[10px] mt-[20px] mb-[15px] mr-[100px] rounded-md'>Home</Link>
      </div>
      <div className={`${burger?'flex':'hidden'} xl:flex justify-center align-middle space-x-2`}>
        <div className='mt-7'><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg></div>
        <Link to='/about'  className='flex align-middle text-2xl justify-center no-underline text-white pt-[10px] pb-[10px] mt-[20px] mb-[15px] mr-[100px] rounded-md'>About</Link>
      </div>
      <div className={`${burger?'flex':'hidden'} xl:flex justify-center align-middle space-x-2`}>
        <div className='mt-7'><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg></div>
        <Link className='flex align-middle text-2xl justify-center no-underline text-white pt-[10px] pb-[10px] mt-[20px] mb-[15px] mr-[100px] rounded-md'><button onClick={() => scrollToSection("footer")}>Contact</button></Link>
      </div>
      <div className={`${burger?'flex':'hidden'} xl:flex justify-center align-middle space-x-2`}>
        <div className='mt-7'><svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg></div>
        <Link to='/signup' className='flex align-middle text-2xl justify-center no-underline text-white pt-[10px] pb-[10px] mt-[20px] mb-[15px] mr-[100px] rounded-md'>Account</Link>
      </div>
      <div className={`${burger?'flex':'hidden'} xl:flex justify-center align-middle`}>
        <input className='mt-8 h-[20px] pl-2 rounded-s-lg' placeholder='Search' type='text' />
        <button id='search' className='rounded-e-lg w-[30px] h-[20px] mt-8 mr-10'>
        <div><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg></div>
        </button>
      </div>
    </div>
  )
}
