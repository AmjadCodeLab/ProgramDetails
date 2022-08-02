// To find the minimum value from given Number Array

const minNumber = [-2,-9,-4,-5];
const minNumber1 = [100,222,999,344,100,222];

function findMinNumber (arr){
    return arr.reduce((prev,curn) => {
        return prev < curn ? prev : curn;
    })
}
console.log(findMinNumber(minNumber));
console.log(findMinNumber(minNumber1));
