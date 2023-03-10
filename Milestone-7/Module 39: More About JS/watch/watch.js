const intervalId =setInterval(()=>{
    console.log(++num);
    if(num===10){
        clearInterval(intervalId);
    }
},2000);