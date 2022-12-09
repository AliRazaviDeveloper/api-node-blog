const userModel = require('../models/UserModel')
const tokenService = require('../services/tokenService')
const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) {
      res.status(404).send({
        status: 404,
        message: 'اطلاعات وارد شده صحیح نمی باشد .',
      })
    }
    if (user.password !== password) {
      res.status(404).send({
        status: 404,
        message: 'اطلاعات وارد شده صحیح نمی باشد .',
      })
    }

    const token = tokenService.sign({ id: user._id })

    res.status(200).send({
      status: 200,
      result: token,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  loginController,
}
