const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(10,10).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 10)
}).then((sum3) => {
    console.log(sum3)
}).catch((e) => {
    console.log(e)
})

//
//
//
//
//                                fulfilled
//                               /
// Promise        -- pending --> 
//                               \
//                                rejected
//
//
//
//