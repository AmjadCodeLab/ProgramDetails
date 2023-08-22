//check element present in another array
var sortArray = function (arr) {
   let result = arr.filter((ele,index,arr1)=>{
      arr1.indexOf(ele) == index})
      result.sort((a,b)=>{
         return a-b
      })
}

console.log(sortArray([10,8,9,8,4,5,10]));