const express = require('express')
const app = express()

require('./middlewares')(app)

module.exports = (port) => {
  app.listen(port, (err) => {
    if (err) throw err
    console.log(`server at runing port http://localhost:${port}`)
  })
}
