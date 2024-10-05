import mongoose, { Document, Schema } from "mongoose";



export interface ICostmer extends Document {
    heading: string;
    description: string;
    customer_img: String,


}

const CustomerSchema: Schema<ICostmer> = new mongoose.Schema({
    heading: {
        type: String,
       
    },
    description: {
        type: String,
        unique: false,
       
    },
    customer_img: {
        required: false,
        type: String,
    }
});



export default mongoose.models.Customer ||
    mongoose.model<ICostmer>("Customer", CustomerSchema);
