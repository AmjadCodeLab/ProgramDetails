// To upper-case the first char in given array
// NOTE : first we need to get the first char of the array using charAt() method and apply upper-case
// NOTE : Second will concatenate the remaining or other char using substring(1)

const months = ['jan','feb','march','april']
let updatedMonth = [];
for (let month of months){
    month = month.charAt(0).toUpperCase() + month.substring(1);
    updatedMonth.push(month);
    console.log(month);
}
console.log(updatedMonth);