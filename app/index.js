const express = require('express')
const app = express()
require('./bootstrap')
require('./middlewares')(app)
require('./routes')(app)
require('./middlewares/exception')(app)
require('./middlewares/404')(app)
module.exports = (port) => {
  app.listen(port, (err) => {
    if (err) throw err
    console.log(`server at runing port http://localhost:${port}`)
  })
}
