const userModel = require('../models/UserModel')

const userList = async (req, res, next) => {
  const users = await userModel.find(
    {},
    {
      __v: 0,
    }
  )
  res.status(200).send({
    success: 200,
    message: 'لیست کاربران دریافت شد .',
    result: users,
  })
}

const addUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      wallet,
      username,
      password,
      phoneNumber,
    } = req.body
    const user = await new userModel({
      firstName,
      lastName,
      email,
      wallet,
      username,
      password,
      phoneNumber,
    })
    await user.save()
    res.status(201).send({
      success: 201,
      message: 'کاربر جدید اضافه شد .',
      result: user,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  userList,
  addUser,
}
