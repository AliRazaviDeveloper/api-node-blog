const express = require('express')
const app = express()

require('./middlewares')(app)
require('./routes')(app)
module.exports = (port) => {
  app.listen(port, (err) => {
    if (err) throw err
    console.log(`server at runing port http://localhost:${port}`)
  })
}
