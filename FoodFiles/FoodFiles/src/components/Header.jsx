import React from 'react'
import foodfiles from './../assets/Images/foodfiles.png'

function Header() {
  return (
    <div  className='flex justify-between items-center w-screen px-[50px]'>
      <img src={foodfiles} className='w-[180px]'/>
      <ul className='flex gap-4 md:gap-25 flex-row' color='black'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li className='hover:font-bold cursor-pointer'>About Us</li>
        <li className='hover:font-bold cursor-pointer'>Contact Us</li>
      </ul>

    </div>
  )
}

export default Header
