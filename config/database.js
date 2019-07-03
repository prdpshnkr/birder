const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// // connect to db
// mongoose.connect('mongodb://localhost:27017/birder', { useNewUrlParser: true })
//   .then(() => {
//     console.log('connected to db')
//   })
//   .catch((err) => {
//     console.log('error connecting to db')
//   })

// connect to db atlas
const CONNECTION_URI = process.env.MONGODB_URI || "mongodb+srv://birder:birder@birder-9oztp.mongodb.net/test?retryWrites=true&w=majority"
mongoose
  .connect(CONNECTION_URI, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("db (mongodb atlas) connected succefully");
  })
  .catch(err => {
    console.log("Error connecting to DB", err);
  });
module.exports = mongoose