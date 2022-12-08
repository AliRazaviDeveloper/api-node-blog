const userList = (req, res, next) => {
  res.send({
    success: 200,
    message: 'لیست کاربران دریافت شد .',
  })
}

module.exports = {
  userList,
}
