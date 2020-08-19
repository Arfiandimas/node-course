const square = function (x) {
    return x * x
}

const square2 = (x) => {
    return x + x
}

const square3 = (x) => x - x

console.log(square(12));
console.log(square2(12));
console.log(square3(12));



const event = {
    name: 'Birthday Party',
    guestList: ['Barjono', 'Zauvik', 'Ajik'],
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((item) => {
            console.log(item + ' is attanding ' + this.name);
            
        })
    }
}

event.printGuestList()