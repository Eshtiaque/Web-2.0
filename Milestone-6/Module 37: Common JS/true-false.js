const x=false;
if(x){
    console.log('value of x is true');
}
else{
    console.log('value of x is false');
}

optional
const y=null;
if(!y){
    console.log('value is truthy');
}
const z=' ';
if(!!z){
    console.log('value is truthy');
}