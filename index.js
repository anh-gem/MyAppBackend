require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/meghna', (req, res) => {
    res.send('Hi Meghna! Welcome Home')
})

app.get('/meghna1', (req, res) => {
    res.send('<div style="background-color:red"><p>Hi Meghna! Welcome Home</p></div>')
})

app.listen((process.env.PORT), () => {
    console.log(`Example app listening on port ${port}`)
})