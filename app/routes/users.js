const express = require('express')
const userRouter = express.Router()
const userContoller = require('../controllers/userController')
userRouter.get('/', userContoller.userList)
userRouter.post('/', userContoller.addUser)
module.exports = userRouter
