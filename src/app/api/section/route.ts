import dbConnect from "../../../../backend/config/dbConnect";
import { NextRequest,NextResponse } from "next/server";
import Section from "../../../../backend/models/section";




export async function POST(request: NextRequest, ) { 
    dbConnect();
   const body = await request.json();
   const { heading, description } = body;

   const section = await Section.create({
       heading,
       description,
   });

   return NextResponse.json({
       success: true,
       section
   });
  
}

export async function GET(request:NextRequest){
    dbConnect();
         const list = await Section.find({});
          return NextResponse.json(
           list
        )
}




