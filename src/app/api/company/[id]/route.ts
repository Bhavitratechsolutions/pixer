

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import Company from '../../../../../backend/models/company';
import dbConnect from '../../../../../backend/config/dbConnect';
import path from 'path';



export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  dbConnect()

  const company = await Company.findById(params.id);
  await company?.deleteOne();
  return NextResponse.json({
    success: true,
    message: "record Deleted Successfully"
  })

}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  dbConnect()
  let record = await Company.findById(params.id);
 
  return NextResponse.json(
    record,
  )
}


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  dbConnect()
  try {
    const data = await request.formData();

    // Get file from form data (optional)
    const file = data.get('file') as unknown as File | null;

    // Find the existing company record
    const company = await Company.findById(params.id);
    if (!company) {
      return NextResponse.json({ success: false, message: 'company not found.' }, { status: 404 });
    }

    // Get description from form data
    const headig = data.get('headig');
    const description = data.get('description');
    if (!description) {
      return NextResponse.json({ success: false, message: 'Description is required.' }, { status: 400 });
    }

    let newFileName = company.company_img; // Default to existing image

    // Process file upload only if a new file is provided
    if (file) {
     
      // Check if the file name is different from the existing one
      if (file.name || file !== company.company_img) {
        // Read file bytes and convert them to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Define the directory and new file path
        const companyDir = path.join(process.cwd(), 'public', 'images');
        const newFilePath = path.join(companyDir, file.name);

        // Ensure the directory exists
        await mkdir(companyDir, { recursive: true });

        // Write the new file
        await writeFile(newFilePath, buffer);
        console.log(`File saved at ${newFilePath}`);

        // If an old file exists, delete it
        const oldFileName = company.company_img;
        if (oldFileName) {
          const oldFilePath = path.join(companyDir, oldFileName);
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

    // Update the company with the new description and image filename (if changed)
    const updatedcompany = await Company.findByIdAndUpdate(
      params.id,
      { $set: {headig:headig, description: description.toString(), company_img: newFileName } },
      { new: true } // Return the updated document
    );

    // Respond with the updated company data
    return NextResponse.json({ success: true, company: updatedcompany,message:"Record updated sucessfully" });

  } catch (error: any) {
    console.error('Error updating company:', error);
    // Handle any errors that occur during the request
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request.', error: error.message },
      { status: 500 }
    );
  }
}

