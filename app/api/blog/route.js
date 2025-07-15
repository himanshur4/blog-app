import { connectDB } from "@/lib/config/db.js"
import BlogModel from "@/lib/models/BlogModels.js";

const { NextResponse } = require("next/server")
import { writeFile } from "fs/promises";
const fs = require("fs");
const loadDB=async()=>{
    await connectDB();
}
loadDB();
//api endpoint to get all blogs
export async function GET(request){
    const blogId=request.nextUrl.searchParams.get('id');
    if(blogId){
        const blog=await BlogModel.findById(blogId);
        if(!blog){
            return NextResponse.json({success:false, msg:"Blog not found"});
        }
        return NextResponse.json(blog);
    }

    const blogs=await BlogModel.find({});
    return NextResponse.json({blogs});
}

//API endpoint for uploading blogs
export async function POST(request){
    const formData=await request.formData();
    const timestamp=Date.now();

    const image=formData.get('image');
    const imageByteData=await image.arrayBuffer();
    const buffer=Buffer.from(imageByteData);
    const path=`./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl=`/${timestamp}_${image.name}`;
    console.log("Image saved at:", imgUrl);
    const blogData={
        title:formData.get('title'),
        description:formData.get('description'),
        category:formData.get('category'),
        author:formData.get('author'),
        image:imgUrl,
        authorImg:formData.get('authorImg')
    }
    await BlogModel.create(blogData);
    console.log("Blog data saved:");
    return NextResponse.json({success:true, msg:"Blog created successfully", data:blogData});
}

//API endpoint for deleting a blog
export async function DELETE(request){
    const id=await request.nextUrl.searchParams.get('id');
    
   const blog= await BlogModel.findById(id);
   fs.unlink(`./public${blog.image}`,()=>{});
   await BlogModel.findByIdAndDelete(id);
   return NextResponse.json({success:true, msg:"Blog deleted successfully"});

}