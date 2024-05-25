require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT|| 3002;

app.use(express.json())

const testRoutes = require('./routes/myTestRoutes')
const calculatorRoutes = require('./routes/calculatorRoutes')
const userRoutes = require('./routes/userRoutes')

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.get('/test2', (req, res) => {
    res.send('Second test')
})

app.use('/testRoutes', testRoutes)

app.use('/calculator', calculatorRoutes)

app.use('/users', userRoutes)

app.use('/', express.static('public'))

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})
