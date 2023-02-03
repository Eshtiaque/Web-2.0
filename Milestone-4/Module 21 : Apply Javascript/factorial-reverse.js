function factorial (number){
    let result =1;
    for (let i=number; i>=1 ;i--){
result=result*i;
}
return result;
}
const num =5;
const result =factorial(num);
console.log('factorial of : ',result);