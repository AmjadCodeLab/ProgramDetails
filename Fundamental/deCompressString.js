//input = a2b3c2o4
//output = aabbbccoooo

var deCompress = function (str){
    let result ="";
    for (let i=1;i<str.length;i=i+2){
        let num = parseInt(str[i]);
        for(let j=0;j<num;j++){
            result = result+ str[i-1];
        }
    }
    return result;
}

console.log(deCompress("a2b3c2o4"));