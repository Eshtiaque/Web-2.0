//array mapping
const numbers=[12,56,87,44];
const half=numbers.map(n=>n/2)
console.log(half);


//index word
const friends =['dsff','dsff','sfdsfge','fdfdf','dfdf'];
const firstLetter =friends.map(friend =>friend[0]);
console.log(firstLetter);

//name length
const nameLengths = friends.map(friend =>friend.length);
console.log(nameLengths);