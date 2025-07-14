import { LibrarySquare, Mail, PlusIcon, ShipWheel } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-gradient-to-bl from-slate-100 to-slate-400 via-slate-300 min-h-screen border-r-1 border-b-1'>
            {/* Header */}
            <Link 
                href={'/'} 
                className='px-2 sm:px-4 lg:pl-5 py-3 transition-all duration-200 hover:bg-slate-300 active:bg-slate-400 max-h-[60px] border border-r-0 border-t-0'
            >
                <h1 className='flex items-center font-mono justify-center tracking-tighter py-2'>
                    <ShipWheel className='w-4 sm:w-7 lg:w-10 m-0 p-0' />
                    <span className='text-sm sm:text-lg md:text-2xl'>Blogforge</span>
                </h1>
            </Link>

            {/* Navigation */}
            <div className='w-full sm:w-80 h-screen relative pt-6 sm:pt-12'>
                <div className='w-full px-2 sm:w-[80%] sm:absolute sm:right-0 space-y-3 sm:space-y-5'>
                    {/* Add blogs */}
                    <Link 
                        href={'/admin/addProduct'} 
                        className='flex items-center justify-center sm:justify-start border border-black gap-2 sm:gap-3 font-medium px-2 sm:px-3 py-2 bg-white shadow-[-3px_3px_0px_#000] sm:shadow-[-5px_5px_0px_#000] transition-all duration-200 hover:shadow-[-2px_2px_0px_#000] sm:hover:shadow-[-3px_3px_0px_#000] active:shadow-[0px_0px_0px_#000] active:transform active:translate-x-1 active:translate-y-1'
                    >
                        <PlusIcon className='w-5 sm:w-7' />
                        <p className='text-xs sm:text-lg'>Add blogs</p>
                    </Link>

                    {/* Blog List */}
                    <Link 
                        href={'/admin/blogList'} 
                        className='flex items-center justify-center sm:justify-start border border-black gap-2 sm:gap-3 font-medium px-2 sm:px-3 py-2 bg-white shadow-[-3px_3px_0px_#000] sm:shadow-[-5px_5px_0px_#000] transition-all duration-200 hover:shadow-[-2px_2px_0px_#000] sm:hover:shadow-[-3px_3px_0px_#000] active:shadow-[0px_0px_0px_#000] active:transform active:translate-x-1 active:translate-y-1'
                    >
                        <LibrarySquare className='w-5 sm:w-7' />
                        <p className='text-xs sm:text-lg'>Blog List</p>
                    </Link>

                    {/* Subscription */}
                    <Link 
                        href={'/admin/subscriptions'} 
                        className='flex items-center justify-center sm:justify-start border border-black gap-2 sm:gap-3 font-medium px-2 sm:px-3 py-2 bg-white shadow-[-3px_3px_0px_#000] sm:shadow-[-5px_5px_0px_#000] transition-all duration-200 hover:shadow-[-2px_2px_0px_#000] sm:hover:shadow-[-3px_3px_0px_#000] active:shadow-[0px_0px_0px_#000] active:transform active:translate-x-1 active:translate-y-1'
                    >
                        <Mail className='w-5 sm:w-7' />
                        <p className='text-xs sm:text-lg'>Subscription</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar