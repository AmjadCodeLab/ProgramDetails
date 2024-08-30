//Question 1: Return the maximum sum from an array of positive numbers under the condition that you cannot pick two adjacent numbers.
//Example1 :I\nput {4,1,2,3} 
// Output: (4+3) = 7
//Example2 :Input {4,8,3,5,9}  
// Output: (8+9) = 17
// WaltDisney Interview Question

const maximumSum = (arr) => {
    let maxNumbers = [];
    for (let i=0;i<arr.length;i++){
        for (let j=1;j<arr.length;j++){
            if (arr[i] !== arr[j]){
                maxNumbers.push(arr[i]+arr[j])
            }
        }
    }
    let finalResult = maxNumbers.reduce((prev,curn)=>{
        return prev > curn ? prev : curn
    })

    return finalResult
}


let arr = [4,1,2,3]
let arr2 = [4,8,3,5,9]

console.log(maximumSum(arr))
console.log(maximumSum(arr2))