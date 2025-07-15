import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB=async()=>{
    await connectDB();
}
LoadDB();
export async function POST(req){
    const formData=await req.formData();
    const emailData={
        email:`${formData.get('email')}`
    }
    await EmailModel.create(emailData);
    return NextResponse.json({success:true, msg:"Email subscribed successfully"});
}

export async function GET(request){
    const emails=await EmailModel.find({});
    if(!emails || emails.length===0){
        return NextResponse.json({success:false, msg:"No Emails Found"});
    }
    return NextResponse.json({success:true, emails});
}

export async function DELETE(request){
    const id=request.nextUrl.searchParams.get('id');
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({success:true, msg:"Email deleted successfully"});
}