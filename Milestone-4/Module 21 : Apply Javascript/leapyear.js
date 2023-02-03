function isLeapYear(year){
const reminder = year%4 ;
if(reminder ===0){
// console.log('Leap Year');
return true;
}
else {
    // console.log('Not Leap Year');
    return false;
}
}
// isLeapYear(1933);
const isHerYear = isLeapYear(1940);
console.log('My year', isHerYear);