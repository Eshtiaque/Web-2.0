//syntactic sugar
class Instructor {
    name;
    designation = 'web Instructor'
    team = 'web team'
    location;
    constructor(name,location){
this.name =name;
this.location=location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    creatQuiz(module) {
        console.log(`please creat qiz ${module}`)
    }
}
const amir = new Instructor('amir', 'mumbai');
console.log(amir);
amir.startSupportSession('9.00');
amir.startSupportSession(60);