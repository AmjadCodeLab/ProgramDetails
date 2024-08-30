//Question 2: Print maximum sum and elements of sub array of length K
//Example 1 :
//Input  array ={-2,10,-2,5,3,4} , K=3  (index)
 //output Sum = 13 , elements = 10,-2,5
 // Disney interview Questions

 const maximumSubArraySum  = (arr,k) => {
    let max =0
    // iterate from from start
    for (let i=0;i+k<=arr.length;i++){ // -2 
        // iterate and find sum of current subarray
        let sum =0
        for (let j=i;j<i+k;j++){ // -2
            sum = sum + arr[j]   // -2
        }
        if (sum > max){
            max = sum
        }
    }
    return max
 }

 let arr = [-2,10,-2,5,3,4]
 let k =3 
 console.log(maximumSubArraySum(arr,k))