//find the sum of number present in string
//input = "amj33ad44";
//output = 77 ( 33+ 44 );

var sumNumberString = function(str){
    // Let create new array with matching string with expression
    let newCheck = str.match(/\d+/g);
    // let use reduce to add the above formed newCheck
    let sum = newCheck.reduce((acc,val)=> acc+parseInt(val),0);
    console.log(sum);
}

sumNumberString("dafo34dil78swq12");