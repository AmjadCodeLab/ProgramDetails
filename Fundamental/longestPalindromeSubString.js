// input = "acacacb"
// out = 5 which is cacac

// Check String is Palindrome or Not
function checkPalindrome(s){
    let format = s.split("").reverse().join("");
    if (format===s)
    return s;
}
let str = "acacacb"
let bag="";
let max = 0;
for (let i=0;i<str.length;i++){
    for(let j=i;j<str.length;j++){
        bag = bag + str[j];
        if (bag.length > max && checkPalindrome(bag)){
            max = bag.length;
        }
    }
}
console.log(max);