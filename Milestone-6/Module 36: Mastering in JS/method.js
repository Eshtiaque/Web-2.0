const student ={
    name:'Sajid',
    money:5000,
    study:'math',
    subjects:['calculus','algebra','geometry'],
    exam: function(){
        // return this.name +'is participating in an exam';
        console.log(this.name ,'is participating in an exam');
    },
    improveExam:function (subject){
        this.exam();
        return `${this.name} is taken improvement exam on ${subject}`
    },
    treatDay: function (amount){
        this.money =this.money - amount;
        return this.money;
    }
}
// const output =student.exam();
// console.log(output);
// student.exam();
const reExam =student.improveExam('Algebra');
// console.log(reExam);
const remaining =student.treatDay(900);
console.log(remaining);


// What would be the output of?:

const getGirlFriend= (name = "chokina")=>"name"; 
console.log(getGirlFriend()); 


let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q); 


const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); 
}



function sum(p, q) {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);
   

   if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }

   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));