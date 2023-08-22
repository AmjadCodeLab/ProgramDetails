// sort an number arrya using comparision method
const unsorted = [4,9,2,0,3,10,5,5];
unsorted.sort((a,b)=>{
    return a-b;
})
console.log(unsorted) // o/p - [ 0, 2, 3,  4, 5, 5, 9, 10 ]