

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import HomeSlider from '../../../../../backend/models/home-slider';
import dbConnect from '../../../../../backend/config/dbConnect';
import path from 'path';
import fs from 'fs/promises'





export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect(); // await the database connection

    const slider = await HomeSlider.findById(params.id);
    if (!slider) {
      return NextResponse.json({ success: false, message: "HomeSlider not found" }, { status: 404 });
    }
    // Delete the slider from the database
    await slider?.deleteOne();

    // Delete the associated image file
    const sliderDir = path.join(process.cwd(), 'public', 'images', slider.slider_img);
    try {
      await fs.unlink(sliderDir); // Delete image from file system
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
  let record = await HomeSlider.findById(params.id);

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

    const slider = await HomeSlider.findById(params.id);
    if (!slider) {
      return NextResponse.json({ success: false, message: "HomeSlider not found" });
    }


    if (file && file.name) {
      // Check if the slider image is the same as the uploaded file (by name or some other means)
      if (slider.slider_img === file.name) {
        filename = slider.slider_img;
      } else {
        // If there's an existing image, delete it
        if (slider.slider_img) {
          const oldImagePath = path.join(process.cwd(), "public/images/", slider.slider_img);
          await unlink(oldImagePath).catch((err) => console.log("Old image not found:", err));
        }
        // Create a new filename and save the new image
        filename = Date.now() + file.name.replace(/ /g, "_");
        const buffer = Buffer.from(await file.arrayBuffer());
        const newImagePath = path.join(process.cwd(), "public/images/", filename);
        await writeFile(newImagePath, buffer);
      }
    } else {
      filename = slider.slider_img; // Retain the existing image if no new file is uploaded
      // console.log('null file here =======================')
    }

    const heading = formData.get('heading') as string;
  

    // Update the slider with the new data
    const updatedHomeSlider = await HomeSlider.findByIdAndUpdate(
      params.id,
      { $set: { heading, slider_img: filename } },
      { new: true }
    );

    return NextResponse.json({ success: true, message: 'HomeSlider Updated Successfully', updatedHomeSlider });
  } catch (error) {
    console.log("Error occurred:", error);
    return NextResponse.json({ success: false, message: "Error occurred" });
  }
}




