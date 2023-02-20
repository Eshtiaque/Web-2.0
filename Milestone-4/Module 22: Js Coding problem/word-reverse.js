function reverseWord(str){
    const words =str.split(' ');
    //const myString ='i am good boy';
    // console.log(words);
    const Result=[];
    for( let i=words.length-1; i>=0; i--){
    const element =words[i];
    Result.push(element);
    }
    // console.log(Result);
    const reversed =Result.join(' ');
    console.log(reversed);
}
const myString ='I am good boy';
reverseWord(myString);