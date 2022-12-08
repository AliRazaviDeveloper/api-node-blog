const express = require('express')
const userRouter = express.Router()
const userContoller = require('../controllers/userController')
userRouter.get('/', userContoller.userList)
userRouter.get('/:id', userContoller.getUser)
userRouter.post('/', userContoller.addUser)
userRouter.delete('/:id', userContoller.deleteUser)
userRouter.put('/:id', userContoller.updateUser)
module.exports = userRouter
