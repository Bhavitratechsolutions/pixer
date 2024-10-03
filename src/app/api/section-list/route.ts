import dbConnect from "../../../../backend/config/dbConnect";
import { NextRequest,NextResponse } from "next/server";
import Section from "../../../../backend/models/section";




dbConnect();


export async function GET(request:NextRequest){

         const list = await Section.find({});
          return NextResponse.json(
           list
        )
}


 


