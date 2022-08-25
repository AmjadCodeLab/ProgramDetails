// replace specific index element from the array
var arr = [1,3,4,6]; // replace 6 - index of 3 with 5

// logic two
let arr1 = [1,2,3,4,6]
arr1.forEach(function(item,i){
    if (item == 6) arr1[i] = 5;
})
console.log(arr1);
