const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ryan Wiggins'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Ryan Wiggins'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Ryan Wiggins'

    })
})

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