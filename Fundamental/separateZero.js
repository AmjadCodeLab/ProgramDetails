/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0] */

// Solution 

const separateZeros = (nums) =>{
    let number =[];
    let zeros = [];
    for (let i=0;i<nums.length;i++){
        if (nums[i] != 0){
            number.push(nums[i]);
        }
        else {
            zeros.push(nums[i]);
        }
    }
    let result = [...number,...zeros];
    console.log(result);
}

separateZeros([0,1,0,3,12]);
separateZeros([0])
separateZeros([14,0,11,0,0])