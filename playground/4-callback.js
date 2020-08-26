// setTimeout(() => {
//     console.log('Tampil setelah 2 detik')
// }, 2000)

// const names = ['Arfian', 'Dimas', 'Andi', 'Permana']
// const sortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         callback(data)
//     }, 2000);
// }

// geocode('kalibawang', (data) => {
//     console.log(data);
// })

const add = (num1, num2, callback) => {
    setTimeout(() => {
        const data = num1 + num2

        callback(data)
    }, 2000);
}

add(10, 10, (sum) => {
    console.log(sum)
})