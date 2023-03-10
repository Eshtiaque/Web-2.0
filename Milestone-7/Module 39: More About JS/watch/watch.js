function currentTime() {
    let date = new Date(); 
    //getHours() returns the hour (0 to 23) of a date.
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
let time = hh + ":" + mm + ":" + ss + " " + session;
  
document.getElementById("clock").innerText = time; 
var t = setTimeout(function(){ 
    currentTime() }, 1000); 
  
  }
  
  currentTime();
//condition ? expression_if_true : expression_if_false

// In this specific code snippet, the hh variable is being checked to see 

//if it is less than 10. If hh is less than 10, then the expression "0" + hh will be evaluated 
//and the resulting string will be assigned to the hh variable. 
//If hh is not less than 10, then hh itself will be assigned to the hh variable.

// In summary, this code is adding a leading zero to the hh variable 
//if it is less than 10, so that the resulting value always has two digits.