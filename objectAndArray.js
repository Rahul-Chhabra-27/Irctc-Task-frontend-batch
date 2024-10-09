const car = {
    make  : 'Toyota',
    model : 'Camry',
    year  : 2020,

    // Method
    Intro : function(model) {
        return `This is a ${this.year} ${this.make} ${model}`;
    } 
}
console.log(car.model)

/// Accessing object properties
console.log(car["make"])

console.log(car.Intro('Corolla'));
console.log(car['Intro']('Corolla'));



const car1 = {
    make  : 'Toyota',
    model : 'Camry',
    year  : 2020,

    // Method
    Intro : function(model) {
        return `This is a ${this.year} ${this.make} ${model}`;
    } 
}


if(car1 == car || car === car1) {
    console.log('They are the same');
}
else {
    console.log('They are not the same');
}

function changeBranding(car,brandName) {
   car.model = 'Civic';
   brandName = 'Honda';
   car.year = 2024;
}

console.log(car)
changeBranding(car,car.make)
console.log(car);


function compareTwoObjects(car1,car2) {
    return car1 === car2
}


let car2 = car;
let car3 = car2;


console.log(compareTwoObjects(car,car2));
console.log(compareTwoObjects(car,car3));
console.log(compareTwoObjects(car2,car3));

// Q ALL Of them are pointing to same location inside _________

// A) Memory Heap(T)
// B) Memory Stack


let a = 10;
function passByValue(newCar = r1) {
    newCar = r1
    newCar = { make : 'Yamaha' }
    newCar = r2;
}

console.log(car)
passByValue(car);
console.log(car)



function passByValue2(a) {
    a = 20;
}


console.log(a)
passByValue2(a);
console.log(a)


// Arrays

const nums = [1,2,3,4,5,6,7,8,9,10,'swapnil','parisha','arin'];

nums.push(12.3)
nums.pop();

