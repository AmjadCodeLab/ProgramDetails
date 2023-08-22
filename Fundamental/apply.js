// The apply method is similar to the call() method.
//The only difference is that,call() method takes arguments separately 
//where as apply() method takes arguments as an array.
function apply (message) {
    console.log(this.name + " is" + message);
}

var person = {name: "Amjad"};

apply.apply(person,[" a QA Engineeer"]); // o/p - Amjad is a QA Engineeer