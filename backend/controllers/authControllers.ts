import { NextRequest, NextResponse } from "next/server";

import {catchAsyncErrors} from '../middlewares/catchAsyncErrors'
import User from "../models/user";

import crypto from "crypto";

// Register user  =>  /api/auth/register
export const registerUser = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();

  //  return NextResponse.json(body)

  const { name, email, password } = body;

  const user = await User.create({
    name,
    email,
    password,
  });

  return NextResponse.json({
    success: true,
  });
});


