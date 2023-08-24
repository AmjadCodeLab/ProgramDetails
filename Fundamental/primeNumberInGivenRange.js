// find the prime number from given range
// Prime Number = whole number only divisible by itself only;
// input = 30 ( range )
// output = 2,3,5,7,9,11,13,17,19,23,29

var primeNumberRange = function () {
    for (let i=0;i<=30;i++){
        let count = 0 // putting count in side this loop due to take j countonly
        for (let j=1;j<=i;j++){
            if (i%j==0){
                count++;
            }
        }
        if(count==2){
            console.log(i);
        }
    }
}

console.log(primeNumberRange());