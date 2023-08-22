// input = " hi there i am using central character"
// output = h=3 ,i=3 count the totalnumber of repeated char so on...

var repeatedCharInString = function (str) {
    let trimSpace = str.trim();
    let lower = trimSpace.toLowerCase();
    let splitStr = lower.split("");
    let sortStr = splitStr.sort();
    let joinStr = sortStr.join("");

    let counter = 1;
    for (let i=0;i<joinStr.length;i++){
        if (joinStr[i] == joinStr[i+1]){
            counter++;
        }
        else {
            console.log(joinStr[i] + " " + counter);
            counter=1
        }
    }
}

repeatedCharInString("Hi there i am good How you guys are doing");