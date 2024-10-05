import mongoose, { Document, Schema } from "mongoose";
// import bcrypt from "bcryptjs";
import * as crypto from "crypto";

export interface ITestimonial extends Document {
    fullName: string;
    title: string;
    description: string;
    

}

const SectionSchema: Schema<ITestimonial> = new mongoose.Schema({
   
    fullName: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
        // unique: true,
    },

});

// Encrypting password before saving the user


export default mongoose.models.Testimonial ||
    mongoose.model<ITestimonial>("Testimonial", SectionSchema);