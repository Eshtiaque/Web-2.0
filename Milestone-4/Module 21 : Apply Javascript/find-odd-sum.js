function getSumOfArray (numbers){
//  console.log(numbers);
let sum =0;
 for(let i=0; i<numbers.length ; i++){
    const index =i;
    const element = numbers [index]; 
    sum =sum +element;
    //    console.log(index,element,sum);
}
return sum ;
}
// const myNumbers =[12,65,45,78,32,45,91];
// getSum(myNumbers);


function getOddNumbersOfArray(numbers){
    const OddNumbers=[];
for (let i=0; i<numbers.length;i++){
    // console.log(i);
    const index =i;
    const element =numbers[index];
    if(element%2 !==0){
        console.log(index,element);
        OddNumbers.push (element);
    }
}
return OddNumbers ;
}
const myNumbers =[12,65,45,78,32,45,91];

const oddNumbers = getOddNumbersOfArray(myNumbers);
console.log(oddNumbers);
// getSumOfArray(myNumbers);
const oddNumberSum = getOddNumbersOfArray (oddNumbers);
console.log('odd number sum',oddNumberSum);