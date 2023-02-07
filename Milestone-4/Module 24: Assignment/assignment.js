//Problem 1: Let’s play a mind game
function mindGame(positiveNumber) {
        // by set this if function we can measure the value of this condition.and we can take the program in right way.
    if (typeof positiveNumber !== 'number') {
        return 'Sorry! Please input integer number!';
    }
    let mulNumber = positiveNumber * 3;
    let sumNumber = mulNumber + 10;
    let divNumber = sumNumber / 2;
    let subNumber = divNumber - 5;
    return subNumber;
}
//by using the positive number properly, serial wise we can calculate the mul,div,sub and sum.  
// const test = mindGame(50);
// console.log(test);
//////////////////////////////////////////////////////
// Problem 2: Finding even or odd
function evenOdd(str){
    // by set this if function we can measure the value of this condition.and we can take the program in right way.
    if(typeof str !== 'string'){
        return 'Sorry! You have to input a string value';
    }
    {
        const word = str.length;
        if(word % 2 === 0){
            return 'even';
        }
        else{
            return 'odd';
        }
    }
}
// //by using the remainder condition we can easily calculate which is even or odd.

// const word2 = evenOdd('Phero');
// console.log(word2);


//Problem 3: Is Less or Greater than seven
function isLGSeven(number){
      // by set this if function we can measure the value of this condition.and we can take the program in right way.
    if(typeof number !== 'number'){
        return 'Sorry! You have to input a integer value';
    }
    const finalNumber= number - 7;
    if(finalNumber < 7){
        return finalNumber;
    }
    else{
        return number * 2;
    }
}
// //By return the value we can get the output which is in condition.
// const test = isLGSeven(-15);
// console.log(test);




// Problem 4: Finding Bad data
function findingBadData(array){
//I declare the function inside the if function where we can see the value perfect or not.
        let Bad_Data= 0;
        for(let i = 0; i < array.length; i++){
            if(!Array.isArray(array) || typeof array[i] !== 'number'){
                return 'Sorry! You have to input a integer value and array ';
            }
            else{
                if(array[i] < 0){
                    Bad_Data+= 1;
                }
            }
        }
        return Bad_Data;
}
// //By using the condition we can calculate the all bad data from the array.
// const data = findingBadData([4, -9, -5, 33, 1]);
// // findingBadData(data);
// console.log(data);

//Problem 5: Convert your gems into diamond
function gemsToDiamond(friend1, friend2, friend3){
     // by set this if function we can measure the value of this condition.and we can take the program in right way.
    if(typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3!== 'number'){
        return 'Sorry! You have to input integer number';
    }
    const powerOfFriend1 = friend1* 21;
    const powerOfFriend2 =friend2 * 32;
    const powerOfFriend3 = friend3* 43;
    const diamondCount = powerOfFriend1 + powerOfFriend2+ powerOfFriend3;
    if(diamondCount >= 2000){
        return diamondCount - 2000;
    }
    else{
        return diamondCount;
    }
}
//Now we can calculate the condition by returning the value.
const test = gemsToDiamond(1, 1, 1);
console.log(test);