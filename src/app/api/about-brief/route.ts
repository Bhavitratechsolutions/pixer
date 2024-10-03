

import dbConnect from "../../../../backend/config/dbConnect";
import { writeFile } from 'fs/promises'

import { NextRequest, NextResponse } from 'next/server';

import AboutBrif from "../../../../backend/models/about-brif";



export async function POST(request: NextRequest) {

  dbConnect();
 
  const data = await request.formData();

  
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  
  const path = `public/images/${file.name}`
  await writeFile(path, buffer)
  console.log(`open ${path} to see the uploaded file`)

  const filename = file.name
  const description = data.get('description')
  const about_image = filename


 await AboutBrif.create({
     description,
     about_image
 })

  return NextResponse.json({ success: true })
}



export async function GET(request: NextRequest) {
  const list = await AboutBrif.find()
  return NextResponse.json(list)
}







