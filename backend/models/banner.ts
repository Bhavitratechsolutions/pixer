
import mongoose, { Document, Schema } from "mongoose";

export interface IBanner extends Document {
    heading: string;
    description: string;
    banner_img: String,


}

const BannerSchema: Schema<IBanner> = new mongoose.Schema({
    heading: {
        type: String,
       
    },
    description: {
        type: String,
        unique: false,
       
    },
    banner_img: {
        required: false,
        type: String,
    }
});



export default mongoose.models.Banner ||
    mongoose.model<IBanner>("Banner", BannerSchema);
