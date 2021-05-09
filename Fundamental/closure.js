// When a function comes under another function 'closure' is created
// Closure pattern remembers outer variable and also helps to access outer scope member
// When you use closure , you are making provate member globally available

// Ex 
function outer() {
    function inner () {
        console.log("Inner Call");
    }
}
const cl = outer();
cl();