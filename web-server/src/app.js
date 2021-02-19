const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


// app.get('/help', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/help.html'))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/about.html'))
// })

app.get('/weather', (req, res) => {
    res.send({
        "Forecast": "Cloudy and snowing",
        "Location": "New York, NY"
    })
})

app.listen(3000, () => {
    console.log('Server is up and running')
})

module.exports = app