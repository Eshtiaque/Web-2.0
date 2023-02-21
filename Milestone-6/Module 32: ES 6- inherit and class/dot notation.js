const product ={
    name:'t-shirt',
    id: 2,
    price:{
        taka: 300,
        poesah: 500
    }
}
const price  =product.price;
const taka = product.price.taka;
console.log(taka);

//second style
const chemistry = product['price']['poesah'];
console.log(chemistry);
//third way
const subject ='taka';
const subjectMarks = product.price[subject];
console.log(subjectMarks);