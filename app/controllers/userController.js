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

const getUser = async (req, res, next) => {
  const { id } = req.params

  try {
    const user = await userModel.findOne({ _id: id }, { __v: 0 })
    if (!user)
      return res.status(404).send({
        code: 'error',
        status: 404,
        message: 'کاربری با این شناسه یافت نشد .',
      })
    res.status(200).send({
      status: 200,
      result: user,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  userList,
  addUser,
  getUser,
}
