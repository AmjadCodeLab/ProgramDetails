// find the count of occurance of substring in given string
// inputStr = "hi hellow hi my buddy by buddy"; , substring = "hi"
// output = 2 ( hi repated 2 times)

var countOfSubstring = function (str1,str2) {
    let count = str1.split(str2).length-1
    console.log(count);
}

countOfSubstring("hi hellow hi my buddy by buddy","hi");