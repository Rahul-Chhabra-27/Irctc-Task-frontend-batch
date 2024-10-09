'use strict';
// Boolean 
// true / false
// Truthy values -> true, non-zero,'non-empty string', {}, []
// falsy values --> false , 0, '',null, undefined, NaN


let somenumber = 10;
let unInitVariable = undefined

//  Short Circuiting && -> false
// const andCondition = true && ( unInitVariable = 'first') && false && ( unInitVariable = 'second');
const orCondition = false || (unInitVariable = 'first') || false || ( unInitVariable = 'second');

console.log(unInitVariable,orCondition);

// parisha -> U,F

// Case 1 
// if (unInitVariable && (somenumber = 20)) {
//     console.log(somenumber);
// }
// console.log(somenumber, unInitVariable);

// //  Case 2
// if ((somenumber = 20) && unInitVariable) {
//     console.log(somenumber);
// }
// console.log(somenumber, unInitVariable);



// && -> false
// || -> true