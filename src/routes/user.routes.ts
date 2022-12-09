import { Router } from 'express'
import { createUser, deleteUser, getUser, updateUser } from '../controller/user.controller'

const router = Router()

router.get('/users', getUser)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router