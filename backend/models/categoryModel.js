const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: { type: String, unique: true, required: true }
}, {
  toJSON: {
    virtuals: true
  }
})

categorySchema
  .virtual('Trips', {
    ref: 'Trips',
    localField: '_id',
    foreignField: 'category'
  })

module.exports = mongoose.model('Category', categorySchema)