import dbConnect from "../../../../backend/config/dbConnect";

import { NextRequest,NextResponse } from "next/server";
import Banner from "../../../../backend/models/banner";


dbConnect();



export async function POST(request: NextRequest) { 
  const body = await request.json();
  const { bannerHeadig, bannerDescription } = body;

    const banner = await Banner.create({
        bannerHeadig,
        bannerDescription,
    });

    return NextResponse.json({
        success: true,
    });
    
}

export async function GET(request: NextRequest) { 
  const banner = await Banner.find({})

  return NextResponse.json({
      success: true,
      banner
  })
    
}



