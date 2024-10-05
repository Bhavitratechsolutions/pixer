import { NextRequest,NextResponse } from 'next/server';

import dbConnect from '../../../../backend/config/dbConnect';
import WebInfo from '../../../../backend/models/web-info';



export async function POST(request:NextRequest){
    dbConnect()
//    return console.log('this is testimonial route')
    let body = await request.json();
  
    const {infoKey,infoValue} = body;


    const response = await WebInfo.create({
      infoKey,
      infoValue,
    });

    
    return NextResponse.json({ success:true,message:' Record Added Successfully' });
}


export async function GET(request:NextRequest) {
    dbConnect()
    let list = await WebInfo.find();

    return NextResponse.json(list)
}

