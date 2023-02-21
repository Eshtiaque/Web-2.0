class teamMember{
    name;
    location;
    constructor(name,location){
        this.name =name;
        this.location=location;
            }
}
class Instructor extends teamMember{
    designation = 'web Instructor'
    team = 'web team'
    constructor(name,location){
 super(name,location);
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    creatQuiz(module) {
        console.log(`please creat qiz ${module}`)
    }
}
class Developer extends teamMember {
    designation = 'web Instructor'
    team = 'web team'
    tech;
    constructor(name,location,tech){
super(name,location);
this.tech=tech;
    }
   developFeature(feature) {
        console.log(`develop the support session at ${feature}`)
    }
    createQuiz(version) {
        console.log(`please release qiz ${version}`)
    }
}

const alia =new Developer('alia','dhaka','react');
console.log(alia);