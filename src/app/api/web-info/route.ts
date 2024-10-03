import dbConnect from "../../../../backend/config/dbConnect";

import { NextRequest, NextResponse } from "next/server";
import webInfo from "../../../../backend/models/web-info";


dbConnect();




export async function POST(request: NextRequest) {
   const body = await request.json();
   const { infoKey, infoValue } = body;

   const webinfo = await webInfo.create({
      infoKey,
      infoValue,
   });

   return NextResponse.json({
      success: true,
      webinfo
   });

}



export async function GET(request: NextRequest) {
   dbConnect();
   const list = await webInfo.find({});
   return NextResponse.json(
      list
   )

}

export async function DELETE(request: NextRequest) {
   const { searchParams } = new URL(request.url);
   const id = searchParams.get("id"); // Get the ID from the query parameters

   console.log('response is =>', id)

   if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
   }

   try {
      // Perform the deletion
      const deletedItem = await webInfo.findByIdAndDelete(id); // Assuming you're using Mongoose

      if (!deletedItem) {
         return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }

      return NextResponse.json({ message: "Item deleted successfully" }, { status: 200 });
   } catch (error) {
      console.error("Error deleting item:", error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
   }
}



