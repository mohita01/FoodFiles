import React, { useState } from 'react'
import banner from './../assets/Images/banner.jpg'
import { IoSearchOutline } from "react-icons/io5";

//className='rounded-2xl'
//className='flex justify-center mt-5 px-[150px]'

function Search() {

  const tags=[
    {
      id:1,
      name:'All',
    },
    {
      id:2,
      name:'Breakfast',
    },
    {
      id:3,
      name:'Lunch',
    },
    {
      id:4,
      name:'Dinner',
    },
    {
      id:5,
      name:'Dessert',
    }
  ]

  const [activeIndex,setActiveIndex]=useState(0);

  return (
    <div className='mx-auto mt-5 w-screen flex flex-col px-[200px]'>
        <img src={banner} className='rounded-2xl'/>
        <br></br>
        
        <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
          <IoSearchOutline className='text-[20px] text-gray-400'/>
          <input type="text" placeholder='Search' className='outline-none bg-white ml-2'/>
        </div>
        <div className='flex gap-10 justify-center mt-5'>
          {tags.map((item,index)=>(
            <ul onClick={()=>setActiveIndex(index)} className={`${index==activeIndex?
            'bg-red-300 text-white':null} p-1 pb-2 rounded-sm
            md:rounded-full cursor-pointer md:px-4
            hover:scale-110 hover:border-[1px] border-red-300 transition-all duration-100 ease-in-out`} >
              <li>{item.name}</li>
            </ul>
          ))}
        </div>
    </div>
  )
}

export default Search
