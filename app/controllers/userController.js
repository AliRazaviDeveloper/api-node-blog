const userModel = require('../models/UserModel')

const userList = async (req, res, next) => {
  try {
    // currentPage offset perpage
    const userCount = await userModel.count()
    const page = req.query.page || 1
    const perpage = 1
    const offset = (page - 1) * perpage
    const totalPages = userCount / perpage
    const users = await userModel
      .find(
        {},
        {
          __v: 0,
        }
      )
      .limit(perpage)
      .skip(offset)
    res.status(200).send({
      success: 200,
      message: 'لیست کاربران دریافت شد .',
      result: users,
      meta: {
        page: parseInt(page),
        pages: totalPages,
        next: `${
          nextPage(page, totalPages)
            ? `${process.env.APP_URL}/api/v1/users?page=${parseInt(page) + 1}`
            : null
        }`,
        perv: prevPage(page)
          ? `${process.env.APP_URL}/api/v1/users?page=${parseInt(page) - 1}`
          : null,
      },
    })
  } catch (error) {
    next(error)
  }
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

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    await userModel.deleteOne({ _id: id })
    res.send({
      status: 200,
      message: 'کاربر مدنظر شما با موفقیت حذف شد .',
      result: id,
    })
  } catch (error) {
    next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const { n, nModified } = await userModel.updateOne(
      { _id: id },
      { ...req.body }
    )

    if (n === 0 || nModified === 0)
      throw new Error(
        'مشکل در عملیات بروزرسانی رخ داده است مجددا تلاش فرمایید .'
      )

    res.send({
      status: 200,
      message: 'عملیات بروزرسانی با موفقیت انجام گرفت .',
    })
  } catch (error) {
    next(error)
  }
}

const nextPage = (page, totalPages) => {
  return page < totalPages
}

const prevPage = (page) => {
  return page > 1
}

module.exports = {
  userList,
  addUser,
  getUser,
  deleteUser,
  updateUser,
}
