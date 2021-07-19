const mongoose = require('mongoose')

const dbConnection = process.env.DBCONNECTION
mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = connection;