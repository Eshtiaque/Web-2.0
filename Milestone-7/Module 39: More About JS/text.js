function logA() { 
    console.log('A')
 }
function logB() { 
    console.log('B') 
}
function logC() {
     console.log('C') 
    }
function logD() {
     console.log('D') 
    }

logA();
setTimeout(logB, 2000);
Promise.resolve().then(logC);
logD();