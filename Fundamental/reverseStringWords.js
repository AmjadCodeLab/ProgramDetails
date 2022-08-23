// input = "school kids are smart"
// output = "smart are kids school"

// Aproach - first split the string into array using split()
// Second reverse the array of elements 
// Thirs , join the array of element to form sentence using join(" ");
// give space in split and join method
function reverseString(str) {
    let str1 = str.split(" ");
    let reverse = str1.reverse();
    let final = reverse.join(" ");
    console.log(final);
}

reverseString("school kids are smart");