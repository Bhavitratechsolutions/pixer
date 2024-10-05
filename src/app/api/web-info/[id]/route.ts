import { NextRequest, NextResponse } from 'next/server';

import WebInfo from '../../../../../backend/models/web-info';
import dbConnect from '../../../../../backend/config/dbConnect';





export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  dbConnect()
  let record = await WebInfo.findById(params.id);

  return NextResponse.json(
    record,
  )
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

  dbConnect()
  const result = await WebInfo.findById(params.id);
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
    infoKey: body.infoKey,
    infoValue: body.infoValue,
  }

  const response = await WebInfo.findByIdAndUpdate(params.id, newData, { new: true });
  return NextResponse.json({ success:true,message:' Record Updated Successfully' });

}
