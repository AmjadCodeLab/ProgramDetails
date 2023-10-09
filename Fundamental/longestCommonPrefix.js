/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. */

// Sloution 

const longCommonPrefix = (str) => {
   str.sort();
   if (str.length===0){
      return "";
   }
   let size = str.length
   let end = Math.min(str[0].length , str[size-1].length)
   let i=0
   let prefix ="";
   while (i<end && str[0][i] == str[size-1][i]){
    i++;
    prefix= str[0].substring(0,i);
   }
   return prefix
}

console.log(longCommonPrefix(["flower","flow","flight"]))
console.log(longCommonPrefix(["dog","racecar","car"]))