const showAlert=()=>{
   alert ('dosto give me money') 
}
const lendMoney=()=>{
    const result =confirm('will you lend me 5000000 taka')
    console.log(result);
    if(result===true){
        alert('janer dosto')
    }
    else{
        console.log('dgm')
    }
}
const getInfo=()=>{
    const dgm=prompt('Tell me your name')
    console.log(dgm)
}