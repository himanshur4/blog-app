import mongoose from "mongoose";

export const connectDB=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://hraj808404:afd46zk6zLPIers9@cluster0.2bughbv.mongodb.net/blog-data')
    } catch (error) {
        console.error("errror in connecting db",error.message);
    }
}