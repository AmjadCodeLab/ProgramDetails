// From ES6 onwards (...) used in many places
// These (...) are called "rest operator" and same as "Spread Operator"

// Ex 1
function sum (...num) {
    console.log(num);
}
sum(4,5,6,7);  // [ 4, 5, 6, 7 ]

// Ex 2
let arr1 = [1,2,3,4]
let arr2 = [...arr1,5,6,7]
console.log(arr2);  // [ 1, 2, 3, 4,  5, 6, 7 ]

// Ex 3 = Find Max and Min Number from Array
let arr3 = [8,9,10,11,3,4,5,6];
console.log(Math.max(...arr3)); // o/p- 11
console.log(Math.min(...arr3)); // o/p- 3

//Ex 4 combine two array
let arr4 = [1,2,3,4,5];
let arr5 = [6,7,8,9,10];
let result = [...arr4,...arr5];
console.log(result); //  [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]