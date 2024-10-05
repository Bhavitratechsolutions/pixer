import mongoose, { Document, Schema } from "mongoose";



export interface IHomeSlider extends Document {
    heading: string;
    slider_img: String,


}

const HomeSliderSchema: Schema<IHomeSlider> = new mongoose.Schema({
    heading: {
        type: String,
       
    },
    slider_img: {
        required: false,
        type: String,
    }
});



export default mongoose.models.HomeSlider ||
    mongoose.model<IHomeSlider>("HomeSlider", HomeSliderSchema);
