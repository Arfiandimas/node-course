require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f505f9578b4e422d44cd363').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({  })
    return count
}

deleteTaskAndCount('5f507ebeb3b7e82fa30067aa').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})