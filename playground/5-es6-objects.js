// Object property shorthand

const name = "Arfian"
const userAge = 27

const user = {
    name,
    age: userAge,
    location: "Yogyakarta"
}

console.log(user);


// Object distructuring

const product = {
    label: 'Macbook Pro 16 inch 2020',
    price: 60000000,
    stock: 1,
    salePrice: undefined,
    rating: 4
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product // rating = 5 = default value
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock, price }) => {
    console.log(type, label, stock, price)
}

transaction('order', product)