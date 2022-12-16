import express from 'express'
import multer from 'multer'
import {getCompletedOrders, getOrders, getOwnOrders, newOrder} from '../controllers/order.controller.js'

// Multer section for uploading images

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({storage: storage})

// Router section

const router = express.Router()

router.get('/complete', getCompletedOrders)
router.get('/', getOrders)
router.get('/byUser', getOwnOrders)
router.post('/add', upload.single('img') , newOrder)

export default router