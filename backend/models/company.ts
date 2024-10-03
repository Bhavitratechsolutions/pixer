import mongoose, { Document, Schema } from "mongoose";



export interface IAboutBrief extends Document {
    headig: string;
    description: string;
    company_img: String,


}

const CompanySchema: Schema<IAboutBrief> = new mongoose.Schema({
    headig: {
        type: String,
        required: [true, "Please enter Banner bannerHeadig"],
    },
    description: {
        type: String,
        required: [true, "Please enter Banner  bannerDescription"],
        unique: true,
    },
    company_img: {
        required: false,
        type: String,
    }
});

// Encrypting password before saving the user


export default mongoose.models.Company ||
    mongoose.model<IAboutBrief>("Company", CompanySchema);
