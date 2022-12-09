const express = require('express')
const auth = require('../middlewares/auth')
const userRouter = express.Router()
const userContoller = require('../controllers/userController')

userRouter.get('/', [auth], userContoller.userList)
userRouter.get('/:id', userContoller.getUser)
userRouter.post('/', [auth], userContoller.addUser)
userRouter.delete('/:id', [auth], userContoller.deleteUser)
userRouter.put('/:id', [auth], userContoller.updateUser)
module.exports = userRouter
