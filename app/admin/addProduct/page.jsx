'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        title: '',
        description: '',
        category: 'Startup',
        author: "John Doe",
        authorImg: '/author_img.png',
    });
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        console.log(data);

    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', image);

        const res = await axios.post('/api/blog', formData);
        if (res.data.success) {
            toast.success(res.data.msg, {
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                },
                iconTheme: {
                    primary: '#713200',
                    secondary: '#FFFAEE',
                },
            });
            setImage(false);
            setData({
                title: '',
                description: '',
                category: 'Startup',
                author: "John Doe",
                authorImg: '/author_img.png',
            });
            console.log("Blog created successfully:", res.data.data);


        }
        else {
            toast.error(res.data.msg);
            console.error("Error:", res.data.msg);
        }
        const result = await res.json();
        console.log(result);
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16 bg-slate-100'>
                <p className='text-xl'>Upload Thumbnail</p>
                <label>
                    <Image src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt='upload area' className='cursor-pointer mt-4' />
                    <input onChange={(e) => { setImage(e.target.files[0]) }} type='file' id='image' hidden required />
                    <p className='text-xl mt-4'>Blog Title</p>
                    <input name='title' value={data.title} onChange={onChangeHandler} type='text' placeholder='Enter blog title' className='w-full sm:w-[500px] mt-4 px-4 py-3 border' required />
                    <p className='text-xl mt-4'>Blog Description</p>
                    <textarea name='description' value={data.description} onChange={onChangeHandler} placeholder='write content here' className='w-full sm:w-[500px] mt-4 px-4 py-3 border' rows={6} required />
                    <p className='text-xl mt-4'>Blog Category</p>
                    <select name='category' value={data.category} onChange={onChangeHandler} className='w-60 mt-4 px-4 py-3 border text-gray-600' required>
                        <option value='Startup'>Startup</option>
                        <option value='Lifestyle'>Lifestyle</option>
                        <option value='Technology'>Technology</option>

                    </select>
                    <br />
                    <button type='submit' className='mt-8 w-60 h-10 mb-10 bg-black text-white'>Add</button>
                </label>
            </form>
        </div>
    )
}

export default page