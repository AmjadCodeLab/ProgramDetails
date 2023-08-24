// seprate string and number in array
// input = ['a','b','c',2,4,6,'d','r',7,9];
// output = ['a','b','c','d','r',2,4,6,7,9]

var separateArray = function (arr) {
    let arrString=[];
    let arrNumber=[];
    arr.forEach(ele => {
        if(typeof(ele)==='string'){
            arrString.push(ele);
        }
        if(typeof(ele)==='number'){
            arrNumber.push(ele);
        }
    });
    let result = [...arrString,...arrNumber];
    console.log(result);
}
separateArray(['a','b','c',2,4,6,'d','r',7,9]);
