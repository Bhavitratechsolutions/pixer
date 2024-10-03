import dbConnect from "../../../../backend/config/dbConnect";
import { registerUser } from "../../../../backend/controllers/authControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest, NextResponse } from "next/server";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

//  router.post(registerUser);

export async function POST(request: NextRequest, ctx: RequestContext) { 
   return NextResponse.json({
      message:"user register successfully "
   })
}
