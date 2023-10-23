// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal 
// substring
//  consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Solution One

const lastWordLength = (s) => {
    let leng=0
    for (let i=s.length-1;i>=0;i--){
        if ( s.charAt(i) != ' '){
            leng++
        }
        else if ( leng != 0){
            break;
        }
    }
    return leng;
}
let s="   fly me   to   the moon  ";
let n="me to res     "; 
console.log(lastWordLength(s));
console.log(lastWordLength(n));

// Solution Two 

const lastWordLen = (s) => {
    let format = s.trim().split(' ');
    return format[format.length-1].length
}

console.log(lastWordLen(s));
console.log(lastWordLen(n));