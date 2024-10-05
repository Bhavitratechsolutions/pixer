

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import HomeSlider from "../../../../backend/models/home-slider";
import dbConnect from "../../../../backend/config/dbConnect";






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
    const slider_img = filename

  
    await HomeSlider.create({
      heading,
      slider_img
    })


    return NextResponse.json({ success:true,message:' HomeSlider Added Successfully' });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({success:false });
  }
};


export async function GET(request: NextRequest){
    dbConnect();
     let list = await HomeSlider.find()
    return NextResponse.json(list)
}




