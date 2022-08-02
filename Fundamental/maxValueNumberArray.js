// To find the maximum value from given Number Array

const maxNumber = [-1,-3,-9,-8,0]
const maxNumber1 = [9,99,23,100,33,78,100]
function findMaxNumber (arr) {
    return arr.reduce((prev,currn) => {
         return prev > currn ? prev : currn;
    })
}

console.log(findMaxNumber(maxNumber));
console.log(findMaxNumber(maxNumber1));