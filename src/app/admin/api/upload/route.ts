import { writeFile } from 'fs/promises'

import { NextRequest, NextResponse } from 'next/server';

import client from '../../model/post'



export async function POST(request: NextRequest) {

 
  const data = await request.formData();

  // console.log('data is ',data)
  //  NextResponse.json(data)
  //  return
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
  const cat_name = data.get('category')
  const cat_slug = data.get('slug')
  const cat_image = filename


 await client.create({
      cat_name,
      cat_slug,
      cat_image
 })

  return NextResponse.json({ success: true })
}



export async function GET(request: NextRequest) {
  const products = await client.find().sort({'cat_name':-1})
  return NextResponse.json({products})
}


export async function DELETE(request){
  const id = request.nextUrl.searchParams.get("id")
   await client.findByIdAndDelete(id)
  return NextResponse.json({message:"Topic is deleted"+id},{status:200})

}




export async function PUT(request: NextRequest) {
 
  const id = request.nextUrl.searchParams.get("id")
  const data = await request.formData()
  const title = data.get("title")
  const category = data.get("category")
  const price = data.get("price")

  const products = await client.findOneAndUpdate(
    {"_id":id},
    {$set: { "title" : title,"category":category,"price":price}}
    )
  return NextResponse.json({products})
}