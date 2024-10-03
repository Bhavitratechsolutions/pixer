import mongoose, { Document, Schema } from "mongoose";



export interface IAboutBrief extends Document {
// bannerHeadig: string;
description: string;
about_image: String,
  
 
}

const AboutBriefSchema: Schema<IAboutBrief> = new mongoose.Schema({
//     bannerHeadig: {
//     type: String,
//     required: [true, "Please enter Banner bannerHeadig"],
//   },
  description: {
    type: String,
    required: [true, "Please enter Banner  bannerDescription"],
    unique: true,
  },
  about_image: {
    required:false,
    type: String,
  }
});

// Encrypting password before saving the user


export default mongoose.models.AboutBrief ||
  mongoose.model<IAboutBrief>("AboutBrief", AboutBriefSchema);
