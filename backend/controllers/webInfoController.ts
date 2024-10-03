
import { NextRequest, NextResponse } from "next/server";
import { catchAsyncErrors } from '../middlewares/catchAsyncErrors'
import webInfo from "../models/web-info";



// Register user  =>  /api/auth/register

export const addWebInfo = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json();

    // return NextResponse.json(body)


    const { infoKey, infoValue } = body;

    const section = await webInfo.create({
        infoKey,
        infoValue,
    });

    return NextResponse.json({
        success: true,
        section
    });
});







