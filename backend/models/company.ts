import mongoose, { Document, Schema } from "mongoose";



export interface ICompany extends Document {
    heading: string;
    description: string;
    company_img: String,


}

const CompanySchema: Schema<ICompany> = new mongoose.Schema({
    heading: {
        type: String,
        // required: [true, "Please enter Company heading"],
    },
    description: {
        type: String,
        unique: false,
        // required: [true, "Please enter Company  Description"],
        // unique: true,
    },
    company_img: {
        required: false,
        type: String,
    }
});

// Encrypting password before saving the user


export default mongoose.models.Company ||
    mongoose.model<ICompany>("Company", CompanySchema);
