import { NextRequest,NextResponse } from 'next/server';
import Testimonial from '../../../../backend/models/testimonial';
import dbConnect from '../../../../backend/config/dbConnect';



export async function POST(request:NextRequest){
    dbConnect()
//    return console.log('this is testimonial route')
    let body = await request.json();
  
    const {fullName,title,description} = body;


    const response = await Testimonial.create({
        fullName,
        title,
        description
    });

    
    return NextResponse.json({ success:true,message:' Record Added Successfully' });
}


export async function GET(request:NextRequest) {
    dbConnect()
    let list = await Testimonial.find();

    return NextResponse.json(list)
}

