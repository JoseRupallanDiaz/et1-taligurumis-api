import express from 'express'
import {newReview} from '../controllers/review.controller.js'
import router from './order.route.js'


//Routes
const router = express.Router()

router.post('/addReview', newReview)

export default router