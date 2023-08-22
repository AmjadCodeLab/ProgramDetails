function call () {
    console.log("Hello" + this.name);
}

var obj = {name :" Amjad"};
call.call(obj);  // o/p - Hello Amjad