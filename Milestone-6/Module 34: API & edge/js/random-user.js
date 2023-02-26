const loadUser =()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then (res=>res.json())
 .then(data => displayQuote(data))
}

const displayQuote = user=>{
    const genderTag =document.getElementById('gender')
    genderTag.innerHTML= user.results[0].gender;
    // console.log(user.results[0].gender);
    
    const name = user.results[0].name.title +' '+ user.results[0].name.first 
    + ' ' + user.results[0].name.last ;
    document.getElementById('name').innerHTML=name;
    // console.log(user.results[0].name.first);
    // console.log(user.results[0].name.title);
    //
    // const pictures = user.results[0].picture.medium;
    // document.getElementById('picture').innerHTML=pictures;
    // console.log(user.results[0].picture);
    //
    const pics =  document.getElementById('pic');
    pics.src = 'https://randomuser.me/api/portraits/med/women/23.jpg';
    console.log(user.results[0].picture);
}
loadUser();