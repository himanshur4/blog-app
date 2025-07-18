'use client'
import { assets, blog_data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FacebookIcon, Instagram, ShipWheel, Twitter } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import axios from 'axios';

const Page = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const res = await axios.get(`/api/blog?id=${params.id}`);
    setData(res.data);

  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (data ? <div className='min-h-screen bg-blue-50'><div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
    <div className='flex justify-between items-center'>
      <Link href={'/'}>
        <h1 className='flex items-center font-mono justify-center gap-0 tracking-tighter text-2xl sm:text-4xl'>
          <ShipWheel className='w-10 m-0 p-0' />
          Blogforge</h1>
      </Link>
      <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get started <Image src={assets.arrow} alt="arrow" /></button>
    </div>
    <div className='text-center my-24'>
      <h1 className='text-xl text-left sm:text-center sm:text-4xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
      <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt='authorImage' />
      <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
    </div>
  </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='dataImage' />

     <div className="blog-content" dangerouslySetInnerHTML={{ __html: data.description.slice(0,120) }}></div>


      <div className="my-24">
        <p className='text-black font-semibold my-4'>Share this article on social media</p>
        <div className="flex">
          <FacebookIcon width={50} />
          <Twitter width={50} />
          <Instagram width={50} />
        </div>
      </div>

    </div>
    <Footer />
  </div> : <></>);
};

export default Page;
