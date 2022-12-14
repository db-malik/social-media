import express from 'express'
import { getComment } from '../controllers/commentController.js'

const router = express.Router()

router.get('/', getComment)

export default router
