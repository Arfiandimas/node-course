const fs = require('fs')
const { userInfo } = require('os')

// const book = {
//     title: 'Seni Bersikap Bodo Amat',
//     author: 'Barjono'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.author)

const getData = fs.readFileSync('1-json.json')
const dataJSON = getData.toString()
const data = JSON.parse(dataJSON)

data.name = 'Arfian Dimas Andi Permana'
data.age = 22

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)