// plaindrome is mirror image concept
// input = "ama" is palaindrome yes

function palindrome(str) {
let str1= str.split("");
let rev = str1.reverse();
let result = rev.join("");
if (result == str){
    console.log("plaindrome")
}
else {
    console.log("Not an plaindrome");
}
}

palindrome("lel");