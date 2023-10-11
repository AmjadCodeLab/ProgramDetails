// input = [1,2,3,4,5] out= [5,4,3,2,1]
// input = [a,b,c,d] out = [d,c,b,a]
// NOTE : this solution is alternative of not using reverse() method.
const reverseList = (input) =>{
    let result =[];
    // iterate from last to first
    for (let i=input.length-1;i>=0;i--){
        result.push(input[i]);
    }
    return result;
}

console.log(reverseList([1,2,3,4,5]));
console.log(reverseList(['a','b','c','d']));