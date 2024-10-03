import mongoose, { Document, Schema } from "mongoose";
// import bcrypt from "bcryptjs";
import * as crypto from "crypto";

export interface ISection extends Document {
    heading: string;
    description: string;
    

}

const SectionSchema: Schema<ISection> = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, "Please enter Banner bannerHeadig"],
    },
    description: {
        type: String,
        required: [true, "Please enter Banner  bannerDescription"],
        unique: true,
    },

});

// Encrypting password before saving the user


export default mongoose.models.Section ||
    mongoose.model<ISection>("Section", SectionSchema);

