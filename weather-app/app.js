 const forecast = require('./utils/forecast')
 const geocode = require('./utils/geocode')


forecast('-7.6915017,110.2436959', (error, data) => {
     console.log('Error', error)
     console.log('Data', data)
})

geocode('banjarharjo, kalibawang', (error, data) => {
     console.log('Error', error)
     console.log('Data', data)
})