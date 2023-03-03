function greeting(greetingHandler,name){
    greetingHandler(name);
    // greetEven(name);
}
// const number = 45;
// greeting(number);
function greetingHandler(name){
    console.log('good morning',name);
}
function greetEven(name){
    console.log('good evening',name);
}
greeting(greetingHandler,'tom');
greeting(greetingHandler,'hom');
greeting(greetingHandler,'dom');
greeting(greetEven,'vom');