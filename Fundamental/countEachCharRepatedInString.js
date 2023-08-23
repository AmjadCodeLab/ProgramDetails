// input = " hi there i am using central character"
// output = h=3 ,i=3 count the totalnumber of repeated char so on...

var repeatedCharInString = function (str) {
    let count = 0;
    let result = "";
   let format = str.split("").sort().join("").trim();
   let lowercase = format.toLowerCase();
   for (let i=1;i<lowercase.length;i++){
    count++;
    if (lowercase[i] != lowercase[i+1]){
        result = result + lowercase[i] + count;
        count =0;
    }
   }
   console.log(result);
}
repeatedCharInString("Hi there i am good How you guys are doing");