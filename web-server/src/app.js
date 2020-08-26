const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello Express!')
})

app.get('/help', (req, res) => {
    res.send('Halaman Help')
})

app.get('/about', (req, res) => {
    res.send('Halaman About')
})

app.get('/weather', (req, res) => {
    res.send('Your Weather')
})
// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server berjalan pada port 3000')
})