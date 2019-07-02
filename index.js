const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

const mongoose = require('./config/database')
const port = 3006

// const { usersRouter } = require('./app/controllers/UsersController')
// app.use('/users', usersRouter)

app.listen(port, () => {
  console.log('listening on port', port)
})