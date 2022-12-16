import express from 'express'

import {getFile} from '../controllers/file.controller.js'

const router = express.Router()

router.get('/:path', getFile)

export default router