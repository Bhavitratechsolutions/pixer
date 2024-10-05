

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import Company from '../../../../backend/models/company';
import dbConnect from "../../../../backend/config/dbConnect";


export const POST = async (req: NextRequest) => {
  dbConnect();
  const formData = await req.formData();


  const file: File | null = formData.get('file') as unknown as File
// console.log('file i s==========>',file)
//   console.log('body is =======>',formData)


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
    const company_img = filename

    await Company.create({
      heading,
      description,
      company_img
    })


    return NextResponse.json({ success:true,message:' Company Added Successfully' });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({success:false });
  }
};

export async function GET(request: NextRequest) {
  dbConnect();
  const list = await Company.find()
  return NextResponse.json(list)
}

