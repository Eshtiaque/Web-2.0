function reversString(text){
    // for (let i=text.length; i>=0; i--){}
    let reversed ='';
    for (let i=text.length-1; i>=0; i--){
        const element =text[i];
        reversed=reversed+element;
        console.log(element,reversed);
    }
    return reversed;
}

const myString ='i am good boy';
const reversed = reversString(myString);
console.log(reversed);
