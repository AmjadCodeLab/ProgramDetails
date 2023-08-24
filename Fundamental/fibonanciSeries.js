// find the fibonaci series upto 5 number
// concept = sum of two previous number

const fibSeries = (num) =>{
    let fibonaci =[0,1];
    for(let i=2;i<num;i++){
        fibonaci.push(fibonaci[i-2]+fibonaci[i-1]);
    }
    return fibonaci;
}

console.log(fibSeries(8));