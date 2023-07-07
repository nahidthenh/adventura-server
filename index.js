const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Adventura Server Is Running !!! ')
})

app.listen(port, () => {
    console.log(`Adventura Server Running On Port ${port}`)
})
