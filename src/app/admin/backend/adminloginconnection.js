import mongoose from 'mongoose'
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI)

const schema = new mongoose.Schema({
    
        email: {
            type: String,
            required: true
            
        },

        password: {
            type: String,
            required: true
            
        },

      
    
})

const db = mongoose.models.adminlogins || mongoose.model('User',schema)

export default db