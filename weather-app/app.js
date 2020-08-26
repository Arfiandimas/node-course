 const forecast = require('./utils/forecast')
 const geocode = require('./utils/geocode')

const address = process.argv[2]

if (!address) {
     console.log('Tolong masukkan alamat. Contoh : node app.js yogyakarta')
} else {
     geocode(address, (error, {latitude, longitude, location}) => {
          if (error) {
               console.log(error)
          }

          forecast(`${latitude},${longitude}`, (error, forecastData) => {
               if (error) {
                    console.log(error);
               }

               console.log(location)
               console.log(forecastData)
          })
     })
}