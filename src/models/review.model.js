import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
    idReview:{
        type: mongoose.Schema.Types.ObjectId,
    },
    message:{
        type: String
    },
    rating:{
        type: Number,
        required: true
    }
})

const reviewModel = mongoose.model('Review', reviewSchema)

export default reviewModel