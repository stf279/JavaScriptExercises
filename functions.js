'use strict';

// expression
// const isEven = function(param) {
//     const result = param % 2 === 0;
//     console.log(result);
//     return result;
// };


// const wellIsIt = isEven(10);
// console.log(wellIsIt);


// const adder = function(num1, num2) {
//     const addResult = num1 + num2;
//     return addResult;
// }

// const whatIsIt = adder(1, 7);
// console.log(whatIsIt);

// const adder = function(num1, num2) {
//     const difference = num1 - num2;
//     return difference;
// }

// const whatIsItDiff = adder(10, 1);
// console.log(whatIsItDiff);

const mathTeacher = {
    name: 'Josh',
    good: 'false',
    adder: function(num1, num2) {
        const addResult = num1 + num2;
        return addResult;
         }
};

console.log(mathTeacher.adder(1, 2));


