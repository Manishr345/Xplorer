import React, { useState } from 'react'
import logo from '../Navbar/logo.png'
import { Link } from 'react-router-dom'

export default function Signup(props) {
    const [signedup, setSignedup] = useState(1);
    const siContinueButton = () => {
        setSignedup(null);
        props.setLoggedin(1);
    }
  return (
    signedup && <div className='flex ml-40 mt-10 rounded-xl bg-gray-300 w-[1000px] h-[500px]'>
       <div className='w-[700px]'>
        <img className='rounded-s-xl w-full h-full' src={logo}/>
       </div>
       <div className='pt-10'>
        <p className='text-left mb-2 text-lg font-serif pl-20'>Sign up</p>
        <input className='bg-black pl-2 ml-2 w-96 text-white h-8 font-mono mb-2 rounded-md' placeholder='Create UserName'/>
        <br/>
        <input className='bg-black pl-2 ml-2 w-96 text-white h-8 font-mono mb-2 rounded-md' placeholder='Create Password'/>
        <br/>
        <input className='bg-black ml-2 w-96 text-white h-8 font-mono pl-2 mb-2 rounded-md' placeholder='Confirm Password'/>
        <Link to='/login'><button className='bg-green-900 ml-2 text-white h-8 font-mono w-96 rounded-md' onClick={siContinueButton}>Continue</button></Link>
        <p className='mb-2 text-lg font-serif pl-15 mt-3'>Connect with Social Media</p>
        <button className='bg-blue-600 w-96 rounded-md ml-20 pl-3 text-white h-8 pt-1 flex mb-3'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#fbfcfe" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
        <p className='ml-20'>Sign up with facebook</p>
        </button>
        <button className='bg-blue-500 w-96 rounded-md ml-20 pl-3 text-white h-8 pt-1 flex mb-3'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#f5f4f4" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
        <p className='ml-20'>Sign up with twitter</p>
        </button>
        <button className='bg-black w-96 rounded-md ml-20 pl-3 text-white h-8 pt-1 flex mb-3'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 496 512"><path fill="#f7f7f7" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
        <p className='ml-20'>Sign up with twitter</p>
        </button>
        <button className='bg-blue-950 w-96 rounded-md ml-20 pl-3 text-white h-8 pt-1 flex mb-2'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="22.875" viewBox="0 0 488 512"><path fill="#fafafa" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>       
        <p className='ml-20'>Sign up with google</p>
        </button>
        <p>Already have a account? <Link onClick={siContinueButton} to='/login'>Log in</Link></p>
       </div>
    </div>
  )
}
