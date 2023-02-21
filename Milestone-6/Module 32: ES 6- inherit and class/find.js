//filter and find
const numbers =[12,30,56,70,55,23,78,998,544,22];
const fives =numbers.find(num=>num%5===0);
console.log(fives);
const five =numbers.filter(num=>num%5===0);
console.log(five);



const product =[
    {id :1,name:'t-shirt',price:100},
    {id :2,name:'shirt',price:200},
    {id :3,name:'pant',price:300},
    {id :14,name:'watch',price:400}
];
