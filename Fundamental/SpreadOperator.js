// From ES6 onwards (...) used in many places
// These (...) are called "rest operator" and same as "Spread Operator"

// Ex 1
function sum (...num) {
    console.log(num);
}
sum(4,5,6,7);

// Ex 2
let arr1 = [1,2,3,4]
let arr2 = [...arr1,5,6,7]
console.log(arr2);

// Ex 3 = Find Max Number from Array
let arr3 = [8,9,10,11,3,4,5,6];
console.log(Math.max(...arr3));