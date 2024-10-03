import { NextRequest,NextResponse } from 'next/server';
import Flash from '../../../../../backend/models/flash';
import dbConnect from '../../../../../backend/config/dbConnect';


dbConnect()
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }){

  const flash = await Flash.findById(params.id);
  await flash?.deleteOne();
  return NextResponse.json({
    success: true,
    message:"record Deleted Successfully"
  })

}


export async function PUT(request:NextRequest,{params}: {params:{id:string}}){

    let body = await request.json();
    const newFlashData = {
        heading:body.heading,
        description:body.description,
    }
    const flash = await Flash.findByIdAndUpdate(params.id,newFlashData)
    return NextResponse.json({
        success:true,
        flash
    })

}
