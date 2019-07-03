const express = require('express')
const mongoose = require('./config/database')
const cors = require('cors')

const { usersRouter } = require('./app/controllers/UsersController')

const app = express()
const port = 3006


app.use(cors())
app.use(express.json())
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log('listening on port', port)
})