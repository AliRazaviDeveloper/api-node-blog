const webToken = require('../services/tokenService')
module.exports = (req, res, next) => {
  if (!('authorization' in req.headers)) {
    res.status(401).send({
      status: 401,
      message: 'برای دسترسی به این ادرس باید دسترسی داشته باشید .',
    })
    return false
  }

  const token = webToken.verify(req.headers.authorization)

  if (!token) {
    res.status(401).send({
      status: 401,
      message: 'توکن شما منقضی شده است  مجددا وارد اکانت خود شوید .',
    })
    return false
  }

  next()
}
