import mongoose, { Document, Schema } from "mongoose";

import * as crypto from "crypto";

export interface IBanner extends Document {
bannerHeadig: string;
bannerDescription: string;
  
 
}

const BannerSchema: Schema<IBanner> = new mongoose.Schema({
    bannerHeadig: {
    type: String,
    required: [true, "Please enter Banner bannerHeadig"],
  },
  bannerDescription: {
    type: String,
    required: [true, "Please enter Banner  bannerDescription"],
    unique: true,
  },
  
});

// Encrypting password before saving the user


export default mongoose.models.Banner ||
  mongoose.model<IBanner>("Banner", BannerSchema);
