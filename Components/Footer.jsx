import { InstagramIcon, LucideFacebook, ShipWheel, Twitter, } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (<div className='flex flex-col bg-gray-800 text-gray-300  px-5 pt-5 pb-0 mt-10 justify-center'>
    <div className='flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-between'>
      <h1 className='flex items-center font-mono justify-center gap-0 tracking-tighter text-xl sm:text-2xl'>
        <ShipWheel className='w-10 m-0 p-0' />
        Blogforge</h1>
      <div className='flex items-center justify-center gap-2'>
        <InstagramIcon className='size-8' />
        <Twitter className='size-8' />
        <LucideFacebook className='size-8' />
      </div>

    </div>
    <p className='text-xs mt-4 text-center mb-0'>All right reserved. Copyright @BlogForge</p>
  </div>
  )
}

export default Footer