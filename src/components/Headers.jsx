import React from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import { Link } from 'react-router-dom'
const Headers = () => {
  return (
   <>
   <div className='font-serif max-w-6xl mx-auto flex flex-wrap justify-between bg-slate-100 p-4'>
    <Link to="/" className='text-black animate-bounce font-bold cursor-pointer text-2xl sm:text-4xl'>E-<span className='text-teal-400 font-bold'>State</span></Link>
    <div className='flex items-center gap-2'>
        <input type="text" placeholder='search' className='focus:outline-slate-400 w-44 rounded-3xl text-center sm:w-96 sm:h-9' />
        <HiOutlineSearch className='flex items-center cursor-pointer hover:bg-slate-200 rounded-full '/>
        </div>
        <ul className='flex gap-5 items-center text-slate-900 font-semibold   cursor-pointer'>
            <li className='hidden sm:inline hover:-translate-y-1 hover:underline'>Home</li>
            <li className='hover:underline hover:-translate-y-1 ease-in duration-300'>Sign In</li>
            <li className='ease-in duration-300 hover:underline hover:-translate-y-1 '>Sign Up</li>
        </ul>

   </div>
   
   </>
  )
}

export default Headers
