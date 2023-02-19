//split
const lyrics = 'tumi bondhu sada. kala bosonto. kale tomai bolte. parini'
const parts = lyrics.split(' ')
const sentences = lyrics.split('.')
const char = lyrics.split('')
// console.log(char);

//slice
const partial =lyrics.slice(5,8);
console.log(partial);


//sub string
const partial2 =lyrics.substring(5,8);
console.log(partial2);

//join something in line
const line = ['tumi bondhu sada.',
    ' kala bosonto. ',
 'kale bolte.parini']
 const newSong= line.join(':');
console.log(newSong);