'use client'
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const res = await axios.get('/api/blog');
    if (res.data.blogs) {
      setBlogs(res.data.blogs);
      console.log("Blogs fetched successfully:", res.data.blogs);
    } else {
      console.error("Failed to fetch blogs:", res.data);
    }
  };
  useEffect(()=>{
    fetchBlogs();
  },[]);
  const deleteBlog = async (mongoId) => {
    const res = await axios.delete(`/api/blog/${mongoId}`);
    if (res.data.success) {
      toast.success(res.data.msg);
    } else {
      toast.error("Failed to delete blog");
    }
    fetchBlogs();
     
   
  };
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-left uppercase bg-gray-50 text-gray-700">
            <tr>
              <th scope='col' className="hidden sm:block px-6 py-3">Author name</th>
              <th scope='col' className="px-6 py-3">Blog Title</th>
              <th scope='col' className="px-6 py-3">Date</th>
               <th scope='col' className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => (
              <BlogTableItem key={index} mongoId={item._id} authorImg={item.authorImg} title={item.title} date={item.date} author={item.author} handleDelete={deleteBlog} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page