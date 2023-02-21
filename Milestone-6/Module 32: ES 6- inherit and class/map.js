const numbers =[2,3,4,5,6];
function getDoubles(numbers){
    const output =[];
    for (const number of numbers){
        const doubled =number ;
        output.push(doubled);
    }
    return output;
}
const result =getDoubles(numbers);
console.log(result);
//another function
const doubleIt =num=>num*2;
const makeDouble =numbers.map(doubleIt);
console.log(makeDouble);
//another
const makeDoubleDirect =numbers.map(num=>num*2);
console.log(makeDoubleDirect);
// //another
const makeDouble2 =numbers.map(x=>x*2);
console.log(makeDouble2);
//new One 
const fiveTimes =[1,2,3,4,5].map(x=>x*5);
console.log(fiveTimes);
