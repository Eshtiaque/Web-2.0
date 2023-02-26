const loadQuote =()=>{
 fetch('https://api.kanye.rest/')
 .then (res=>res.json())
 .then(data => displayQuote(data))
// console.log('quotes loading');
}

const displayQuote = quote =>{
    const blockquote =document.getElementById('quote');
    blockquote.innerHTML = quote.quote;
}
loadQuote();