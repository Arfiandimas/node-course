const https = require('https')
const url = `https://api.weatherapi.com/v1/forecast.json?key=ad2a46fc3b004b9099c71636202508&q=110.36444,-7.80139`

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })

})

request.on('error', (error) => {
    console.log('Errornya adalah', error);
})

request.end()