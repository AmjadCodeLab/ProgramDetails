// make lower case
// split ( each char of the string )
// sort ( the char from a-z normal way)
// join (the char to form the string again)
// compare the string  

function checkAnagram (str1, str2){
    var a = str1.toLowerCase();
    var b = str2.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a===b;
}

console.log(checkAnagram("Miry","Army"));