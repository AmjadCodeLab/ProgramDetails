// Currying is an advanced technique to transform a function of arguments n, 
//to n functions of one or fewer arguments.

//if we have a function f(a,b),then the function after currying,will be transformed to f(a)(b).
// e.g add(a,b) after currying will add(a)(b)

function add (a){
    return function(b){
        console.log(a+b);
    }
}

add(3)(4) // o/p - 7