import { NextRequest,NextResponse } from 'next/server';
import Flash from '../../../../backend/models/flash';
import dbConnect from '../../../../backend/config/dbConnect';


dbConnect()
export async function POST(request:NextRequest){
    let body = await request.json();
    const {heading,description} = body;

    const flash = await Flash.create({
        heading,
        description
    });

    
    return NextResponse.json({
        success:true,
        flash
    })
}


export async function GET(request:NextRequest) {
    
    let list = await Flash.find();

    return NextResponse.json(list)
}

