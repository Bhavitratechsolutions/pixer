import { NextRequest,NextResponse } from 'next/server';
import Flash from '../../../../../backend/models/section';
import dbConnect from '../../../../../backend/config/dbConnect';


dbConnect()
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }){

  const section = await Flash.findById(params.id);
  await section?.deleteOne();
  return NextResponse.json({
    success: true,
    message:"record Deleted Successfully"
  })

}




export async function PUT(request:NextRequest,{params}: {params:{id:string}}){

    let body = await request.json();
    const newSectionhData = {
        heading:body.heading,
        description:body.description,
    }
    const section = await Flash.findByIdAndUpdate(params.id,newSectionhData)
    return NextResponse.json({
        success:true,
        section
    })

}
// export const updateUser = catchAsyncErrors(
//     async (req: NextRequest, { params }: { params: { id: string } }) => {
//       const body = await req.json();
  
//       const newUserData = {
//         name: body.name,
//         email: body.email,
//         role: body.role,
//       };
  
//       const user = await User.findByIdAndUpdate(params.id, newUserData);
  
//       return NextResponse.json({
//         user,
//       });
//     }
//   );