// Find unique list of array with sorted order
// first use filter method to find unique list
// second sort it using comparision method
const notunique = [10,8,9,8,4,5,10];
const unique = notunique.filter((ele,index,arr)=> arr.indexOf(ele) == index);
unique.sort((a,b)=>{
    return a-b
})
console.log(unique);  // o/p - [ 4, 5, 8, 9, 10 ]