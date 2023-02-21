const fish={
    name:'king khan',
    address:'Dhaka',
    color : 'silver',
    phone : '0241054102',
    price : '4000'
}
const{name,color,price}={ name:'king khan', price : '4000',address:'Dhaka',color :'silver'}
console.log( price );
//new way
const{address}=fish;
console.log(address);
//array destructuring
const [first,another]=[44,99];
console.log(first,another);
//extra
function getName(){
    return ['alim','halim'];
}