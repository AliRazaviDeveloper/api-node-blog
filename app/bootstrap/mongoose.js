const mongoose = require('mongoose')
const { MONGO_DB_HOST, MONGO_DB, MONGO_DB_PORT } = process.env

mongoose.connection.on('error', (error) => {
  console.log('mongoose connection fail', error.message)
})
const startMongoose = () => {
  mongoose.connect(`mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB}`)
}

module.exports = startMongoose
