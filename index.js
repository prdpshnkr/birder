const express = require('express')
const mongoose = require('./config/database')
const cors = require('cors')
const path = require("path");

const { usersRouter } = require('./app/controllers/UsersController')

const app = express()
const port = process.env.PORT || 3006

app.use(cors())
app.use(express.json())
app.use('/users', usersRouter)


//for heroku
app.use(express.static(path.join(__dirname, "client/build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"))
})
//for heroku

app.listen(port, () => {
  console.log('listening on port', port)
})