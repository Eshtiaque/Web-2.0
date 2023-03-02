const kodomAli ={
    name:'Sajid',
    money:5000,
    study:'math',
    subjects:['calculus','algebra','geometry'],
    exam: function(){
        console.log(this);
        // return this.name +'is participating in an exam';
        console.log(this.name ,'is participating in an exam');
    },
    examArrow : ()=>{
        console.log(this);
    },
    examNested : ()=>{
        examArrow : ()=>{
            console.log(this);
        }
        arrow();
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
kodomAli.exam();

const badamAli={
    name:'kacaBadam',
    money: 5000
}
badamAli.exam =kodomAli.exam;
badamAli.exam();
////////////////////////////////////////
function clickHandler(){
    console.log('inside click handler',this);
}
document.getElementById('btn-click-2').addEventListener('click',function(){
    console.log(this);
})