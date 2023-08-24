//find sum of all digit
// input 549 
//output 5+4+9 => 18

const sumDigit = (num) =>{
    let sum =0;
    while(num!=0){
        let rem = num%10;
        sum = sum + rem
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(sumDigit(549))