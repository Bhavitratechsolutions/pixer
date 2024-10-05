

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import Company from '../../../../../backend/models/company';
import dbConnect from '../../../../../backend/config/dbConnect';
import path from 'path';
import fs from 'fs/promises'





export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect(); // await the database connection

    const company = await Company.findById(params.id);
    if (!company) {
      return NextResponse.json({ success: false, message: "Company not found" }, { status: 404 });
    }
    // Delete the company from the database
    await company?.deleteOne();

    // Delete the associated image file
    const companyDir = path.join(process.cwd(), 'public', 'images', company.company_img);
    try {
      await fs.unlink(companyDir); // Delete image from file system
    } catch (err) {
      console.error('Error deleting image:', err);
    }

    return NextResponse.json({
      success: true,
      message: "Record deleted successfully"
    });
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({
      success: false,
      message: "Failed to delete record"
    }, { status: 500 });
  }
}


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  dbConnect()
  let record = await Company.findById(params.id);

  return NextResponse.json(
    record,
  )
}





export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const formData = await req.formData();

    // console.log('form data is ====>',   formData)



    const file = formData.get('file') as File | null;
    let filename = "";

    const company = await Company.findById(params.id);
    if (!company) {
      return NextResponse.json({ success: false, message: "Company not found" });
    }


    if (file && file.name) {
      // Check if the company image is the same as the uploaded file (by name or some other means)
      if (company.company_img === file.name) {
        filename = company.company_img;
      } else {
        // If there's an existing image, delete it
        if (company.company_img) {
          const oldImagePath = path.join(process.cwd(), "public/images/", company.company_img);
          await unlink(oldImagePath).catch((err) => console.log("Old image not found:", err));
        }
        // Create a new filename and save the new image
        filename = Date.now() + file.name.replace(/ /g, "_");
        const buffer = Buffer.from(await file.arrayBuffer());
        const newImagePath = path.join(process.cwd(), "public/images/", filename);
        await writeFile(newImagePath, buffer);
      }
    } else {
      filename = company.company_img; // Retain the existing image if no new file is uploaded
      // console.log('null file here =======================')
    }

    const heading = formData.get('heading') as string;
    const description = formData.get('description') as string;

    // Update the company with the new data
    const updatedCompany = await Company.findByIdAndUpdate(
      params.id,
      { $set: { heading, description, company_img: filename } },
      { new: true }
    );

    return NextResponse.json({ success: true, message: 'Company Updated Successfully', updatedCompany });
  } catch (error) {
    console.log("Error occurred:", error);
    return NextResponse.json({ success: false, message: "Error occurred" });
  }
}




