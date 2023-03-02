const bottle ={
                color: 'yellow',
                price:50,   
                isCleaned:true,
                capacity:1
                }
const keys =Object.keys(bottle);
console.log(keys);          

const values =Object.values(bottle);
console.log(values);  

const pair =Object.entries(bottle);
console.log(pair);


//delete object and seal and freeze
console.log(bottle);
Object.freeze(bottle);
//we cant remove or delete object
// for seal and cant add
Object.seal(bottle);
delete bottle.isCleaned;  
console.log(bottle);