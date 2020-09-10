const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add} = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should convert 32 F to 0 C', () => {
    const fahrenToCel = fahrenheitToCelsius(32)
    expect(fahrenToCel).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    const celToFahren = celsiusToFahrenheit(0)
    expect(celToFahren).toBe(32)
})

// test('Async test demo', (demo) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

test('Should add two numbers', async (done) =>{
    add(2,3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('Should add two numbers async/await', async (done) =>{
    const sum = await add(11, 22)
    expect(sum).toBe(33)
    done()
})