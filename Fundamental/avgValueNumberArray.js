// To find the average number from the number array
// NOTE : Using reduce array find the total count of the number , then find the length
// NOTE : Divide the total count of the number from length
const avgNumber = [-2,0,-6,-5,-10];
 const totalCount = avgNumber.reduce((a,b) => a+b,0);
 const length1 = avgNumber.length;
 console.log(totalCount/length1);

const avgNumber1 = [10,30,44,31,70];
 const totalCount1 = avgNumber1.reduce((a,b)=> a+b,0);
 const length2 = avgNumber1.length;
 console.log(totalCount1/length2);

