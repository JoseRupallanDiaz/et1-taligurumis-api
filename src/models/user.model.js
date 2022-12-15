import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    passowrd:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: false
    }
})

const userModel = mongoose.model('User', userSchema)

export default userModel