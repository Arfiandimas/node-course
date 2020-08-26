 const request = require('request')

// const url = "http://api.weatherapi.com/v1/forecast.json?key=ad2a46fc3b004b9099c71636202508&q=-7.866666599999999,110.1791475"

// request({ url: url, json: true }, (error, response) => {
//      if (error) {
//           console.log("tidak ada koneksi");
//      } else if (response.body.error) {
//           console.log('Lokasi tidak ditemukan');
//      } else {
//           console.log("It is currently " + response.body.current.temp_c + " degrees out. There is a " + response.body.current.precip_in + "% chance of " + response.body.current.condition.text);
//      }
// })

const geocoding = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJmaWFuZGltYXMiLCJhIjoiY2tlOXZlNDhnMDFqZTM1cWppZW5iMXMwbyJ9.2f0n5MxcR9nZEWKG_QeE1w&limit=1"

request({ url: geocoding, json: true }, (error, response) => {
     if (error) {
          console.log('tidak ada koneksi')
     } else if (response.body.features.length === 0) {
          console.log('Lokasi tidak ditemukan')
     } else {
          const latitude = "Latitude = " + response.body.features[0].center[0]
          const longitude ="Longitude = " + response.body.features[0].center[1]
          console.log(latitude);
          console.log(longitude);
     }
})