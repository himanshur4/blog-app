import { LibrarySquare, Mail, PlusIcon, ShipWheel } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col  bg-slate-200 h-screen'>
            <Link href={'/'} className='px-2 sm:pl-14py-3 border border-black'>
                <h1 className='flex items-center font-mono justify-center gap-0 tracking-tighter text-2xl sm:text-4xl'>
                    <ShipWheel className='w-10 m-0 p-0' />
                    Blogforge</h1>
            </Link>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    <Link href={'/admin/addProduct'} className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                        <PlusIcon width={28} /><p>Add blogs</p>
                    </Link>
                     <Link href={'/admin/blogList'} className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                        <LibrarySquare width={28} /><p>Blog List</p>
                    </Link>
                     <Link href={'/admin/subscriptions'} className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                        <Mail width={28} /><p>Subscription</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Sidebar