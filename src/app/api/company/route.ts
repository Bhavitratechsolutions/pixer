

import dbConnect from "../../../../backend/config/dbConnect";
import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server';
import Company from '../../../../backend/models/company';


export async function POST(request: NextRequest) {

  dbConnect();


  try {
    const data = await request.formData();

console.log('form-data is =>',data)
    const file: File | null = data.get('file') as unknown as File

    console.log('file is =====>',file)

    // if (!file) {
    //   return NextResponse.json({ success: false, message: "Please Uoload file " })
    // }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)


    const path = `public/images/${file.name}`
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)

    const filename = file.name
    const heading = data.get('heading')
    const description = data.get('description')
    const company_img = filename


    await Company.create({
      heading,
      description,
      company_img
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({message:"Please Upload file "})
  }
}



export async function GET(request: NextRequest) {
  dbConnect();
  const list = await Company.find()
  return NextResponse.json(list)
}



