/* Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome. */

const palindromeNumber = (x) => {
    let str = x.toString();
    //console.log(typeof(str));
    let splitIT = str.split("");
    let reverseIT = splitIT.reverse();
    let joinIT = reverseIT.join("");
    let int = parseInt(joinIT);
    //console.log(typeof(int));
    if (x === int) {
        return true
    }
    else {
        return false
    }
}
console.log(palindromeNumber(10)); // false
console.log(palindromeNumber(101)); // true