import express from 'express'
import { getUser, getUsers } from '../controllers/userController.js'

const router = express.Router()

router.get('/:id', getUser)
router.get('/', getUsers)

export default router
