//input = aabbbcccddeff
//output = a2b3c3d2e1f2

var compressString = function (str) {
    let count =0;
    let result = "";
    for (let i=0;i<str.length;i++){
        count++;
        if(str[i] != str[i+1]){
            result = result+str[i]+count
            count=0
        }
    }
    return result;
}

console.log(compressString("aabbbcccddeff"))