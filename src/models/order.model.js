import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    review:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    description:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    img:{
        type: String
    },
    state:{
        type: String,
        required: true
    }
})

const orderModel = mongoose.model('Order', orderSchema)

export default orderModel