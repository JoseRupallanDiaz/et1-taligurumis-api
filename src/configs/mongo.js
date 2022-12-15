import mongoose from 'mongoose'
import {MONGOURI} from './enviorment.js'

export default function connectDB(){
    return mongoose
        .connect(MONGOURI)
        .then(success => {
            console.log("MongoDB connected successfully")
            return true
        })
        .catch(error => {
            console.log("Failed to connect to MongoDB. Error:"+error)
            return false
        })
}