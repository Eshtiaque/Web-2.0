const  loadPhone =async(searchText,dataLimit)=>{
const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
const res = await fetch(url);
const data =await res.json();
displayPhones(data.data,dataLimit);
}


const displayPhones =(phones,dataLimit) =>{
    // console.log(phones);
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent ='';
    //display 20 phones only
    const showAll=document.getElementById("show-all");
    if(dataLimit && phones.length>10){
        phones =phones.slice(0,9);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }
   
    //display no phone found
    const noPhone =document.getElementById('no-phone-found');
    if(phones.length ===0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }


    //display phone found
    phones.forEach(phone=>{
        const phoneDiv =document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML =`
        <div class="card p-3">
         <img src="${phone.image}" class="card-img-top p-3" alt="...">
        <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">${phone.slug}</p>
        <button onclick ="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
        
        </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    })
    //stop loader
    toggleSpinner(false);
}
const processSearch =(dataLimit)=>{
    toggleSpinner(true);
    const searchField =document.getElementById('search-field');
    const searchText =searchField.value;
    loadPhone(searchText,dataLimit);
}
//handle search button click
document.getElementById('btn-search').addEventListener('click',function(){
    //start loader
    processSearch(10);


})
//search input field enter key handler
document.getElementById('search-field').addEventListener('keypress',function(e){
    console.log(e.key);
    if(e.key =='Enter'){
        //code for enter
        processSearch(10);
        // processSearch();
    }
})


const toggleSpinner =isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}
//not the best solution 
document.getElementById('btn-show-all').addEventListener('click',function(){
  processSearch();
})
const loadPhoneDetails= async id=>{
const url=`https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data =await res.json();
    displayPhoneDetails(data.data);
}
const displayPhoneDetails =phone =>{
    console.log(phone);
    const modalTitle = document.getElementById('phoneDetailsModalLabel');
    modalTitle.innerText= phone.name;
    const phoneDetails =document.getElementById('phoneDetails');
    phoneDetails.innerText=`
    <p>Release Date: ${phone.releaseDate}</p>
    <p>Main Features: ${phone.mainFeatures ? phone.mainFeatures.storage:'none'}</p>
    `
}
 loadPhone('Apple');