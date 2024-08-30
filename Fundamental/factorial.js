/**
 * Soving factorial problem using recursive way
 */

const factorial = (num) => {
    if (num === 1){
        return 1
    }
    else {
        return num * factorial(num-1)
    }
}
let num =10
console.log(factorial(num))