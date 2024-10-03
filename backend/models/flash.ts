import mongoose, { Document, Schema } from "mongoose";


export interface IBanner extends Document {
    heading: string;
    description: string;


}

const FlashSchema: Schema<IBanner> = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, "Please enter Flash Headig"],
    },
    description: {
        type: String,
        required: [true, "Please enter Flash  Description"],
        unique: true,
    },

});

// Encrypting password before saving the user


export default mongoose.models.Flash ||
    mongoose.model<IBanner>("Flash", FlashSchema);
