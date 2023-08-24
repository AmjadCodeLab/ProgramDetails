//check number is prime or not
// input = 18
// output = not a prime

var IsPrime = function (num) {
    let count=0;
    for (let i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }
    if (count >2){
        console.log(num+ " Not a prime number");
    }
    else {
        console.log(num+ " Prime Number");
    }
}

IsPrime(17);