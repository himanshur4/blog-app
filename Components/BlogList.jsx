import { blog_data } from '@/Assets/assets';
import React, { useState } from 'react'
import BlogItem from './BlogItem';

const BlogList = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className='flex flex-col items-center justify-around gap-2 mt-1'>
      <div className='flex justify-center gap-3 sm:gap-6 md:gap-7 lg:gap-9 px-2 py-1 items-center mb-6'>
        <button className={category === "All" ? 'bg-black px-2 py-1 cursor-pointer text-white' : "cursor-pointer"} onClick={() => { setCategory("All") }}>All</button>
        <button className={category === "Lifestyle" ? 'bg-black px-2 py-1 cursor-pointer text-white' : "cursor-pointer"} onClick={() => { setCategory("Lifestyle") }}>Lifestyle</button>
        <button className={category === "Startup" ? 'bg-black px-2 py-1 cursor-pointer text-white' : "cursor-pointer"} onClick={() => { setCategory("Startup") }}>Startup</button>
        <button className={category === "Technology" ? 'bg-black px-2 py-1 cursor-pointer text-white' : "cursor-pointer"} onClick={() => { setCategory("Technology") }}>Technology</button>
      </div>
      <div className='px-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 '>
         {
          blog_data.map((item,index)=>(<BlogItem key={index} category={item.category} title={item.title} image={item.image} description={item.description}/>))
         }
      </div>
    </div>
  )
}

export default BlogList
