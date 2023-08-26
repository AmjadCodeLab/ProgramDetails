//Find the majority element in array
// input = [1,2,3,4,1,3,1,4] , output = 1 (repeated 3 times > 3&4 2 times);

const { count } = require("console");

// Additonal Case we can check , 
 // 1. empty array [] 
 // 2. length of array should be more than 2 e.g [1,2,...]
 // 3. if element inside array does not have any duplicate/repeated value
 // 4. check for +ve and -ve number [-1,1,-2,-2.....]
 // 5. check if majority element is more than 1 e.g [1,1,2,2,3,3]



 var majorityElement = (arr) => {
    let maxCount=0;
    let maxFrequency =0;
    for (let i=0;i<arr.length;i++){
        let count=0;
        for (let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if (count > maxCount){
            maxCount = count
            maxFrequency = arr[i];
        }
    }
    console.log("Majority Element will "+maxFrequency);
 }

 majorityElement([1,2,3,1,3,2,4,5,2,1,1,1]);