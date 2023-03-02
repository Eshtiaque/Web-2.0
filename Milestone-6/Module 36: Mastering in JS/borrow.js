const kodomAli ={
    name:'Sajid',
    money:5000,
    study:'math',
    subjects:['calculus','algebra','geometry'],
    exam: function(){
        // return this.name +'is participating in an exam';
        console.log(this.name ,'is participating in an exam');
    },
    // improveExam:function (subject){
    //     this.exam();
    // // return `${this.name} is taken improvement exam on ${subject}`
    // },
    treatDay: function (amount, trt){
        this.money =this.money - amount -trt ;
        return this.money;
    }
}
const result =kodomAli.exam();
const badamAli={
    name:'kacaBadam',
    money: 5000
}
// console.log(result);
const result2 =kodomAli.exam.call(badamAli);
console.log(result2);

//call style of calling another function 
const badamMoney = kodomAli.treatDay.call(badamAli, 400, 40);
console.log(badamMoney);
//apply style of calling another function 
const badamMoney2 = kodomAli.treatDay.apply(badamAli, [400, 40]);
console.log(badamMoney2);
//bind style of calling another function 
const badamMoney3 = kodomAli.treatDay.bind(badamAli, 400, 40);
const remaining =badamMoney3(1000,100)
console.log(remaining);