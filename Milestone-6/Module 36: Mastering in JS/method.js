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