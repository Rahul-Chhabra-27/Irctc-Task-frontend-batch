// 1. function declaration

// function combine(fruitA,fruitB) {
//     return 'Juice of ' + fruitA + ' and ' +  fruitB;
// }
// function juicer(fruitA,fruitB) {
//    return combine(fruitA,fruitB);
// }

// console.log(juicer('apple','orange'));

console.log(addTwoNumbers);
let insidefunctions = 10;


function addTwoNumbers(numberA,numberB) {
    let secondStringToNumber
    if (typeof numberB === 'string') {
        secondStringToNumber = Number(numberB)
    }
    return numberA + secondStringToNumber * 10;
}
// 2. function expression
// console.log(addTwoNumbersFE);
let addTwoNumbersFE = function(numberA,numberB) {
    return numberA + numberB;
}

function b(){
    console.log("I am b");
}
function a() {
    b()
}
a()
// // console.log(addTwoNumbers(10,'20'));
// addTwoNumbers = function() {
//     return 10;
// }

// console.log(addTwoNumbers());
// if('1&' < 2) {
//     console.log('This is true');
// }
// console.log((2 < NaN),typeof (2 < NaN))
// const someRandomNumber = String(10 - 100) + '10' 
// console.log(someRandomNumber,typeof someRandomNumber);
// console.log(typeof addTwoNumbers(1,'123^'));




// console.log(addTwoNumbersFE(10,20));
// addTwoNumbersFE = function() {
//     return 10;
// }
// console.log(addTwoNumbersFE());
// console.log(addTwoNumbersFE(10,20));



// console.log(addTwoNumbersAF(10,20));
// // 3. Arrow Function
var addTwoNumbersAF = (numberA,numberB) => {
    return numberA + numberB;
}


// const bookings = [
//   { trainName: "Rajdhani Express", destination: "Delhi", classType: "AC", availableSeats: 5 },
//   { trainName: "Shatabdi Express", destination: "Mumbai", classType: "Sleeper", availableSeats: 0 },
//   { trainName: "Duronto Express", destination: "Kolkata", classType: "AC", availableSeats: 10 },
//   { trainName: "Garib Rath", destination: "Delhi", classType: "Sleeper", availableSeats: 15 },
// ];


// const add = (a = 10,b = 20) => {
//     return a + b;
// }

// console.log(add());


//IIFE
const result = (function(greet) {
    return `Hello ${greet}`;
})('parisha');

console.log(result);