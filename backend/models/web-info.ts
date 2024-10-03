import mongoose, { Document, Schema } from "mongoose";


export interface ISection extends Document {
    infoKey: string;
    infoValue: string;
    

}

const WebInfoSchema: Schema<ISection> = new mongoose.Schema({
    infoKey: {
        type: String,
        required: [true, "Please enter Banner bannerHeadig"],
    },
    infoValue: {
        type: String,
        required: [true, "Please enter Banner  bannerDescription"],
        unique: true,
    },

});

// Encrypting password before saving the user


export default mongoose.models.Webinfo ||
    mongoose.model<ISection>("Webinfo", WebInfoSchema);
