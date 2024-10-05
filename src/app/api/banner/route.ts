

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

import Banner from "../../../../backend/models/banner";
import dbConnect from "../../../../backend/config/dbConnect";





export async function GET(){
   let list = await Banner.find()
    return NextResponse.json(list)
}
export const POST = async (req: NextRequest) => {
  dbConnect();
  const formData = await req.formData();

  const file: File | null = formData.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }


  const buffer = Buffer.from(await file.arrayBuffer());

  const filename = Date.now() + file.name.replaceAll(" ", "_");

  try {
    await writeFile(
      path.join(process.cwd(), "public/images/" + filename),
      buffer
    );
    const heading = formData.get('heading')
    const description = formData.get('description')
    const banner_img = filename

  
    await Banner.create({
      heading,
      description,
      banner_img
    })


    return NextResponse.json({ success:true,message:' Banner Added Successfully' });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({success:false });
  }
};



