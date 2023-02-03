function isEven(number){
    const remainder =number%2;
    // console.log(remainder);
    // return remainder;
if(remainder === 0){
    // console.log('Even Number');
    return true  ;
}
else{
    // console.log('Odd Number');
    return false;
}
}
// isEven(303);
const myNumberIsEven = isEven(400);
console.log(myNumberIsEven);