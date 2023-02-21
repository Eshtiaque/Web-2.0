const numbers =[12,34,56,77,54,23,78,998,544,22];
const bigNums =numbers.filter(number=> number > 20);
console.log(bigNums);

const product =[
    {id :1,name:'t-shirt',price:100},
    {id :2,name:'shirt',price:200},
    {id :3,name:'pant',price:300},
    {id :14,name:'watch',price:400}
];
const expensive = product.filter(products =>products.price>200);
console.log(expensive);