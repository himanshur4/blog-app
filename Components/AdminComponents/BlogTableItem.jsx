import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({ authorImg,title ,date,author,handleDelete,mongoId}) => {
    const BlogDate=new Date(date);
    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image width={40} height={40} src={authorImg ? authorImg : assets.profile_icon} alt="Author Image"/>
                <p>{author ? author : "Unknown Author"}</p>
            </th>
            <td className='px-6 py-4'>
                {title ? title : "No Title"}
            </td>
            <td className='px-6 py-4'>
                {BlogDate.toDateString()}
            </td>
            <td className='px-10 py-4' >
               <span className= 'cursor-pointer hover:text-red-900 hover:bg-slate-200 hover:rounded-full hover' onClick={() => handleDelete(mongoId)}>X</span>
            </td>
        </tr>
    )
}

export default BlogTableItem