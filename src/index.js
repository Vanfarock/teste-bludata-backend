require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const dbConnection = require('./db')

const companyRoutes = require('./Routes/companyRoutes');
const providerRoutes = require('./Routes/providerRoutes');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/companies', companyRoutes)
app.use('/providers', providerRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
