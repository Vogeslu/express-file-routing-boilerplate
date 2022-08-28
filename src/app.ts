require('dotenv').config()

import express, { Application } from 'express'
import createRouter, { router } from 'express-file-routing'
import configuration from './configuration'

const cors = require('cors')

const app: Application = express()
const port = configuration.port

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router())
createRouter(app)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
