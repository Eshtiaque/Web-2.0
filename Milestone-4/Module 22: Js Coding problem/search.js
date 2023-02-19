const lyrics = 'tumi bondhu sada kala bosonto kale tomai bolte parini'
const searchString = 'Bosonto';
//in one line
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine);
//  const doesExist = lyrics.includes( searchString);
//  const doesExist = lyrics.includes('bosonto');
//  console.log(doesExist);
//  
// const lyricsLowerCase =lyrics.toLowerCase();

// const doesExist =  lyricsLowerCase.includes(searchString);
// console.log(doesExist);
//for index number
console.log(lyrics.indexOf('kale'));
//use of index use
if(lyrics.indexOf('sada') !== -1){
    console.log('exist inside the string')
}
else{
    console.log('does not exist inside the string')
}
//start with
console.log(lyrics.startsWith('kale'));
//End with
console.log(lyrics.endsWith('kale'));