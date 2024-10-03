

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import AboutBrief from "../../../../../backend/models/about-brif";
import dbConnect from '../../../../../backend/config/dbConnect';
import path from 'path';


dbConnect()
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

  const aboutBrief = await AboutBrief.findById(params.id);
  await aboutBrief?.deleteOne();
  return NextResponse.json({
    success: true,
    message: "record Deleted Successfully"
  })

}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  let record = await AboutBrief.findById(params.id);
 
  return NextResponse.json(
    record,
  )
}






export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.formData();

    // Get file from form data (optional)
    const file = data.get('file') as unknown as File | null;

    // Find the existing aboutBrief record
    const aboutBrief = await AboutBrief.findById(params.id);
    if (!aboutBrief) {
      return NextResponse.json({ success: false, message: 'aboutBrief not found.' }, { status: 404 });
    }

    // Get description from form data
    const description = data.get('description');
    if (!description) {
      return NextResponse.json({ success: false, message: 'Description is required.' }, { status: 400 });
    }

    let newFileName = aboutBrief.about_image; // Default to existing image

    // Process file upload only if a new file is provided
    if (file) {
      // Check if the file name is different from the existing one
      if (file.name !== aboutBrief.about_image) {
        // Read file bytes and convert them to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Define the directory and new file path
        const aboutBriefDir = path.join(process.cwd(), 'public', 'images');
        const newFilePath = path.join(aboutBriefDir, file.name);

        // Ensure the directory exists
        await mkdir(aboutBriefDir, { recursive: true });

        // Write the new file
        await writeFile(newFilePath, buffer);
        console.log(`File saved at ${newFilePath}`);

        // If an old file exists, delete it
        const oldFileName = aboutBrief.about_image;
        if (oldFileName) {
          const oldFilePath = path.join(aboutBriefDir, oldFileName);
          try {
            await unlink(oldFilePath);
            console.log(`Old file removed: ${oldFilePath}`);
          } catch (error) {
            console.warn(`Failed to remove old file: ${oldFilePath}`, error);
          }
        }

        newFileName = file.name; // Update with the new file name
      } else {
        console.log('File name is the same, skipping file replacement.');
      }
    }

    // Update the aboutBrief with the new description and image filename (if changed)
    const updatedaboutBrief = await AboutBrief.findByIdAndUpdate(
      params.id,
      { $set: { description: description.toString(), about_image: newFileName } },
      { new: true } // Return the updated document
    );

    // Respond with the updated aboutBrief data
    return NextResponse.json({ success: true, aboutBrief: updatedaboutBrief });

  } catch (error: any) {
    console.error('Error updating aboutBrief:', error);
    // Handle any errors that occur during the request
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request.', error: error.message },
      { status: 500 }
    );
  }
}


// export async function PUT(request:NextRequest,{params}: {params:{id:string}}) {

//   const data = await request.formData()

//   const file: File | null = data.get('file') as unknown as File

//   if (!file) {
//     return NextResponse.json({ success: false })
//   }

//   const bytes = await file.arrayBuffer()
//   const buffer = Buffer.from(bytes)

//   const path = `public/aboutBrief/${file.name}`
//   await writeFile(path, buffer)
//   console.log(`open ${path} to see the uploaded file`)

//   const filename = file.name


//   const description = data.get("description")



//   const aboutBriefs = await AboutBrief.findByIdAndUpdate(
//     {"_id":params.id},
//     {$set: { "description" : description,"about_image":filename,
    
//   }}
//     )

//   return NextResponse.json({aboutBriefs})
// }



// export async function PATCH(request:NextRequest,{params}: {params:{id:string}}){

//   let body = await request.json();
//   const newFlashData = {
//       heading:body.heading,
//       description:body.description,
//   }
//   const flash = await Flash.findByIdAndUpdate(params.id,newFlashData)
//   return NextResponse.json({
//       success:true,
//       flash
//   })

// }