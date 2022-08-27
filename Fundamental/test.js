var s = "aabbcbbbdbbbbefffbb"
var result = s.split("");
console.log(result);

// Empty an array using splice method and setting lenght to 0
let arr = [23,'am','er',34];
arr.splice(0,arr.length);
arr.length=0;
console.log(arr);

// unshift => [array] <= push -- adding at begining and end
// shift   <= [array] => pop  -- removing from begining and end

// add at begining
let arr2 = ["a","b","c"];
// Logic 1
let added = ["x"].concat(arr2);
// logic 2
let add = arr2.unshift("x");
console.log(added); // [x,a,b,c]
console.log(add); // 4
console.log(arr2);

// add at end 
let arr3 = [1,2,3,4,5];
// Logic 1
let added1 = arr3.concat(6)
// Logic 2
let add1 = arr3.push();
console.log(added1) // [1,2,3,4,5,6]
console.log(add1)  // 6
console.log(arr3);

// remove from begin
let arr4 = ['a','d','e','f'];
let removed = arr4.shift();
console.log(arr4);

// remove from end
let arr5 = [1,2,3,4,6];
arr5.pop();
console.log(arr5)