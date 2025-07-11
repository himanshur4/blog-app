import { assets } from '@/Assets/assets'
import { ShipWheel } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28 text-primary'>
            <div className='flex justify-between items-center'>
                <h1 className='flex items-center font-mono justify-center gap-0 tracking-tighter text-2xl sm:text-4xl'>
                    <ShipWheel className='w-10 m-0 p-0' />
                    Blogforge</h1>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get started <Image src={assets.arrow} alt="arrow"/></button>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium text-black'>Latest Blogs</h1>
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aut. Lorem ipsum dolor sit amet consectetur impedit animi!</p>
                <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000]' action="">
                    <input type="email" placeholder='Enter your email' className='pl-4 outline-none' />
                    <button className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white' type='submit'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Header