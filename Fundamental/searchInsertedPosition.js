// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

//Solutions
const sortedSearch = (num,tar) => {
    let count =0;
    for (let i=0;i<num.length;i++){
        if (num[i]=== tar){
            return i
        }
        else {
            if (num[i] < tar) {
            count++;
        }
    }
}
return count;
}

console.log(sortedSearch([1,3,5,6],2)) // 1
console.log(sortedSearch([1,3,5,6],7)) // 4
console.log(sortedSearch([1,3,5,6],5)) // 2