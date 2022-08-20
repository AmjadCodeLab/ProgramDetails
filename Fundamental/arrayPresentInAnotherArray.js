//To check elements of the first array present in another array
// We will use of "includes" method to check

const studentRoll = [1,2,3,4,5,6,7];
const studentPass = [12,23,34];
// Check pass student roll number present in student roll array

// some will check any one of element is present or not
   let result = studentRoll.some(ele => studentPass.includes(ele));


console.log(result);