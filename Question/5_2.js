const num=[1,2,3];
const mul=num.map((num) => num*2);
console.log(mul);


const Num=[1,2,3,4]
const result=Num.filter((num)=> num % 2=== 0)
console.log(result);

const sum= [1, 2, 3, 4];

const addTowSum=sum.reduce((a,b)=>a+b)
console.log(addTowSum);

const large =[10,5,20,8]
const LargeNum =large.reduce((a,b)=>a>b ? a:b)
console.log(LargeNum);
