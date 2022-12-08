const express = require('express')
const userRouter = express.Router()
const userContoller = require('../controllers/userController')
userRouter.get('/', userContoller.userList)

module.exports = userRouter
