console.log(1);
console.log(2);
let num =0;
const intervalId =setInterval(()=>{
    console.log(++num);
    if(num===10){
        clearInterval(intervalId);
    }
},2000);
// console.log(3);
console.log(4);
console.log(5);
console.log(6);