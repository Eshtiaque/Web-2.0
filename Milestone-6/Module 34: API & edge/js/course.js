const loadQuote =()=>{
 fetch('https://api.kanye.rest/')
 .then (res=>res.json())
 .then(data => displayQuote(data))
// console.log('quotes loading');
}
const loadQuote2 =async()=>{
    try{
        const res = await fetch('https://api.kanye.rest/')
        const data = await res.json()
        displayQuote(data);
    
    }
    catch(error){
        console.log(error);
    }

}
const displayQuote = quote =>{
    const blockquote =document.getElementById('quote');
    blockquote.innerHTML = quote.quote;
}
loadQuote();