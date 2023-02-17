const sections  =document.querySelectorAll('section');
// console.log(section);
 for (const section of sections){
    section.style.border ='2px solid steelblue';
    section.style.marginBottom ='5px';
    section.style.borderRadius ='15px';
    section.style.paddingLeft ='7px';
    section.style.backgroundColor ='lightgray';
 }
//  const placeContainer=document.getElementById('places-container');
//  placeContainer.style.backgroundColor ='yellow';
const placeContainer=document.getElementById('places-container');
 placeContainer.classList.add('text-center');