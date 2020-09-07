require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5f4f96b568a8ef2c3ed3ce4e', { age:5 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age:5 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age:age })
    const count = await User.countDocuments({ age:age })
    return count
}

updateAgeCount('5f4f96b568a8ef2c3ed3ce4e', 22).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})