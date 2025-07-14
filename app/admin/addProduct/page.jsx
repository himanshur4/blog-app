'use client'
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React, { useState } from 'react'

const page = () => {
    const [image, setImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const [data, setData] = useState({
        title: '',
        description: '',
        category: 'Technology',
        image: null
    });
    const categories = [
        { value: "", label: "Select category" },
        { value: "technology", label: "Technology" },
        { value: "startup", label: "Startup" },
        { value: "lifestyle", label: "Lifestyle" },
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };
    return (
        <>
            <form className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6">
                <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
                        Blog Title
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        placeholder="Enter blog title"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="thumbnail">
                       <Image className='mt-4' src={assets.upload_area} width={140} height={140}/>
                    </label>
                    <input
                       
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        required
                        hidden
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="description"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Write your blog description"
                        required
                    />
                </div>



                <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">
                        Category
                    </label>
                    <select
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="category"
                        name="category"
                        value={data.category}
                        onChange={handleChange}
                        required
                    >
                        {categories.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                                {cat.label}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default page