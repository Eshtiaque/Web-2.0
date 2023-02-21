const add = (first,second)=>first+second;
const getFullName =(first,second)=>first+' '+second;
const multiply = (a,b)=>a*b;
const result = multiply(7,8)
console.log(result);

//for all parameter will be same.
//no parameter arrow function 
const getPie =()=>3.14;
//One parameter arrow function 
const doubleIt =(num)=>num*2;
//One parameter simple version
// without first bracket
const fiveTimes =num=>num*5;
//multiline arrow function
//if you want to return something
// use the return function 
const doMath =(x,y,z)=>{
    const firstSum =x+y;
    const secondSum =x+y;
    const result = firstSum+secondSum;
    return result;
    
}