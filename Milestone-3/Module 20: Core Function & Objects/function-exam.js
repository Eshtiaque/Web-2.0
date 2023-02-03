//
// function body
//     return   
//
//var returnName =functionName(parameter)
function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const assignment1Marks = 58;
const assignment2Marks = 59;
const assignment3Marks = 60;
var final = getAverage(assignment1Marks , assignment2Marks , assignment3Marks);
console.log('my average =',final);