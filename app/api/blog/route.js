import { connectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModels";

const { NextResponse } = require("next/server")
import { writeFile } from "fs/promises";

const loadDB=async()=>{
    await connectDB();
}
loadDB();

export async function GET(request){
    return NextResponse.json({msg:"API working"})
}

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