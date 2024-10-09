function outer(firstName) {
   return function inner(secondName) {
        return function innerAndInner(lastName) {
            console.log(firstName,secondName,lastName)
            return `Your full name is ${firstName} ${secondName} ${lastName}`;
        }
    }
}
// // function currying
// console.log((outer('john')('doe')('smith')))

// // const first = outer('john');
// // const second = first('doe');
// // const third = second('smith');



// function someRandomFunction() {
//     let p = 10;
// }
// someRandomFunction();
// // console.log(p);


// function a () {
//     let b = 10;
//     return function () {
//         console.log(b);
//     }

// }

// const result = a();

// function c() {
//     let b = 20;
//     result();
// }
// c();





// scope of let and const -> block level {} 
// scope of var -> function / Excution context level

// var a = 10;
// {
//     let a = 20;
// }

// let a = 10;
// {
//     var a = 10;
// }

// let a = 10;
// let a = 20;

// const a;



// ncaught ReferenceError: Cannot access 'b' before initialization
// at scoping.js:67:13

// console.log(b);
// var a= 10;
// let b = 20;

// console.log(a)




// Uncaught ReferenceError: arin is not defined at scoping.js:78:13
// console.log(arin);

function outer() {
    let b = 100;
    const inner = () => {
        console.log(b);
    }
    b = 300;
    return inner;
}

const res = outer();


(function() {
    b = 400;
    res()
})()



// scoping.js:101 Uncaught TypeError: Assignment to constant variable.
// at scoping.js:101:20
// (anonymous)	@	scoping.js:101
const someRandomvariable = 10;
someRandomvariable = 20;