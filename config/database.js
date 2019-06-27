const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// connect to db
mongoose.connect('mongodb://localhost:27017/birder', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db')
  })
  .catch((err) => {
    console.log('error connecting to db')
  })

module.exports = mongoose