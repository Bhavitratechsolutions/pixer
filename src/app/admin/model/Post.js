// import mongoose from 'mongoose';

// const postSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     imageUrl: {
//         type: String,  // This field will store the path or URL of the uploaded image
//         required: true, // You can set this to false if the image is optional
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now, // Automatically add a timestamp
//     }
// });

// export default mongoose.models.Post || mongoose.model('Post', postSchema);


import mongoose from 'mongoose'
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI)

const schema = new mongoose.Schema({
    
        cat_name: {
            type: String,
            required: true
            
        },

        cat_slug: {
            type: String,
            required: true
        },

        cat_image: {
            type: String,
            required: true
        },

        cat_visibility: {
            type: String,
            default: 'yes'
        },
        cat_deleted: {
            type: String,
            default: 'no'
        },
        cat_subcat_count: {
            type: Number,
            default: 0
        },
        cat_product_count: {
            type: Number,
            default: 0
        },
        
    
})

const db = mongoose.models.categories || mongoose.model('categories',schema)

export default db