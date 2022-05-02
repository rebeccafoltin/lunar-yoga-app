const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: 30,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 30,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String
}, {timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

// userSchema.virtual("password")
//   .set(function() {

//   })
//   .get(function() {

//   })

module.exports = mongoose.model('User', userSchema)
