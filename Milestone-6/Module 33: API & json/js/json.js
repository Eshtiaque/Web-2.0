const user ={id:1,name:'gorib admi',job:'actor'};
//javascript object notation
const stringified =JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner : 'alia',
    address: {
        street: 'kocu khet voot er goli',
        city:'Dhaka',
        country:'bd'

    },
    products:['laptop','mic,','monitor','keyboard'],
    revenue: 45000,
    isOpen:true
}
console.log(shop);
const newOne =JSON.stringify(shop);
console.log(newOne);
const shopObj =JSON.parse(newOne);
console.log(shopObj);
