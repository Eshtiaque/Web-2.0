function sum(a,b,c){
    const args =[...arguments];
    // console.log(args); 
    const result = a+b+c;
    return result;
}
const total = sum(45,56,67,45,10,67,8,30);
// console.log(total); 
//argument is array light