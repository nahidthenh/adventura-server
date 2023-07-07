const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const hotels = require('./data/hotels.json')

app.get('/', (req, res) => {
    res.send('Adventura Server Is Running !!! ')
})


app.get('/hotels', (req, res) => {
    res.send(hotels)
})

app.get('/hotels/:id', (req, res) => {
    const id = req.params.id
    const hotel = hotels.find(htl => htl.id == id)
    res.send(hotel)
})

app.listen(port, () => {
    console.log(`Adventura Server Running On Port ${port}`)
})
