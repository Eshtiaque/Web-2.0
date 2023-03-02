 const player={};
 //object properties
 player.name='Sajid';
 player.specialty ='Avenger';
 //method
 player.bat =function(){
    console.log('swing your bat');
 }
//  console.log(player);
//  player.bat();
 ///////////////////////////////
 const student ={
    name:'pande',
    job:'ande',
    ball:function(){
        console.log('throw the ball');
    },
    salary:20000
}
//object constructor
const person = Object();
console.log(person);
// output will be {}


//object create method
// const item = Object.create(null);
const item = Object.create(student);
console.log(item.name);

//class
class Person{
    name ='Abul';
    address ="dhaka";
    constructor(age){
        this.age=age;
    }
}
const person1 =new Person(60);
console.log(person1);


//function creating object
function Car(model,price){
    this.model=model;
    this.price =price;
}
const tesla = new Car ('elon',50);
console.log(tesla);