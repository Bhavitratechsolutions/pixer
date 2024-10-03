
import { NextRequest, NextResponse } from "next/server";
import { catchAsyncErrors } from '../middlewares/catchAsyncErrors'
import Section from "../models/section";



// Register user  =>  /api/auth/register

export const addSection = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json();

    // return NextResponse.json(body)


    const { heading, description } = body;

    const section = await Section.create({
        heading,
        description,
    });

    return NextResponse.json({
        success: true,
        section
    });
});







