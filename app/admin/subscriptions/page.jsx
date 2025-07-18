'use client'
import SubsTableItem from '@/Components/AdminComponents/SubsTableItem'
import axios from 'axios';
import { set } from 'mongoose';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {

    const response = await axios.get('/api/email');
    setEmails(response.data.emails);
  };

  const deleteEmail=async(mongoId)=>{
     toast.promise(axios.delete(`/api/email?id=${mongoId}`),{
      loading:"Removing subscription...",
      success:<b>Subscription removed Successfully 🎉</b>,
      error:<b>Could not remove subscription.</b>,
    }).then(()=>{
      fetchEmails();
    })
  }

  useEffect(()=>{
    fetchEmails();
  },[]);
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Subscriptions</h1>
      <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>Email Subscription</th>
              <th scope='col' className='hidden sm:block px-6 py-3'>Date</th>
              <th scope='col' className='px-6 py-3'>Action</th>

            </tr>
          </thead>
          <tbody>
            {emails.map((email, index) => (
              <SubsTableItem key={index} email={email.email} mongoId={email._id} date={email.date} handleDelete={deleteEmail}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page