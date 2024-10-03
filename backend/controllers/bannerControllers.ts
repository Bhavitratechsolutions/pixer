import { NextRequest, NextResponse } from "next/server";

import { catchAsyncErrors } from '../middlewares/catchAsyncErrors'
import Banner from "../models/banner";



// Register user  =>  /api/auth/register
export const addBanner = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json();

    //   return NextResponse.json(body)

    const { bannerHeadig, bannerDescription } = body;

    const banner = await Banner.create({
        bannerHeadig,
        bannerDescription,
    });

    return NextResponse.json({
        success: true,
    });
});


export const getBannerList = catchAsyncErrors(async (req: NextRequest) => {

    const banner = await Banner.find({})

    return NextResponse.json({
        success: true,
        banner
    })
});



