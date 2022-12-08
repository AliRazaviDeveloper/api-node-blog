const { Schema, model } = require('mongoose')
const UserSchema = new Schema({
  username: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  wallet: { type: Number, default: 1000 },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
})

const userModel = model('User', UserSchema)

module.exports = userModel
