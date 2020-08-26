const request = require('request')

const forecast = (latlong, callback) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=ad2a46fc3b004b9099c71636202508&q=${latlong}`

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback("tidak ada koneksi", undefined)
        } else if (response.body.error) {
            callback('Lokasi tidak ditemukan', undefined)
        } else {
            callback(undefined, "It is currently " + response.body.current.temp_c + " degrees out. There is a " + response.body.current.precip_in + "% chance of " + response.body.current.condition.text)
        }
    })
}

module.exports = forecast