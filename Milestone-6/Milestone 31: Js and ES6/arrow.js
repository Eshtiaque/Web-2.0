//function declaration
function add(first,second=0){
    const total =first+second;
    return total;
 }

 //another function expression
 const add1= function add1(first,second=0){
    const total =first+second;
    return total;
 }
 //another function expression with anonymous function
 const add2= function (first,second=0){
    const total =first+second;
    return total;
 }
 //another function create
 function add3(first,second){
    return first+second;
 }
//another function
const add4 = function(first,second){
    return first+second;
 }
 //arrow function
 const add5 = (first,second)=>first+second;
 

  
 const result = add5(10 ,20);
 console.log(result); 
 console.log(result); 
