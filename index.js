const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const hotels = require('./data/hotels.json')
const whyus = require('./data/whyUs.json')
const destinations = require('./data/destinations.json')

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

app.get('/whyus', (req, res) => {
    res.send(whyus)
})
app.get('/whyus/:id', (req, res) => {
    const id = req.params.id
    const whyusd = whyus.find(wu => wu.id == id)
    res.send(whyusd)
})

app.get('/destinations', (req, res) => {
    res.send(whyus)
})
app.get('/destinations/:id', (req, res) => {
    const id = req.params.id
    const destination = destinations.find(wu => wu.id == id)
    res.send(destination)
})

app.listen(port, () => {
    console.log(`Adventura Server Running On Port ${port}`)
})
