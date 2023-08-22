// return specific char from string using index
// e.g "hi there how are you" return all "e" with indexs

function charString (str) {
    let count = 0
   for (let i=0;i<=str.length;i++){
    if (str[i] == 'e'){
        console.log(str[i])
    count = count+1;
    }
   }
   console.log("count is " + count)
}
charString("hi there how are you");