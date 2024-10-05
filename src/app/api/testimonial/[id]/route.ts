import { NextRequest, NextResponse } from 'next/server';
import Testimonial from '../../../../../backend/models/testimonial';
import dbConnect from '../../../../../backend/config/dbConnect';





export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  dbConnect()
  let record = await Testimonial.findById(params.id);

  return NextResponse.json(
    record,
  )
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

  dbConnect()
  const result = await Testimonial.findById(params.id);
  await result?.deleteOne();
  return NextResponse.json({
    success: true,
    message: "record Deleted Successfully"
  })

}


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {


  dbConnect()

  let body = await request.json();
 
  const newData = {
    fullName: body.fullName,
    title: body.title,
    description: body.description,
  }

  const response = await Testimonial.findByIdAndUpdate(params.id, newData, { new: true });
  return NextResponse.json({ success:true,message:' Record Updated Successfully' });

}
