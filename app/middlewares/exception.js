module.exports = (app) => {
  app.use((error, req, res, next) => {
    const status = error.status || 500

    res.status(status).send({
      status,
      code: 'Exception',
      en_message: error.message,
      fa_message: 'سرور قادر به پاسخگویی نمی باشد لطفا مجددا تلاش فرماید .',
    })
  })
}
