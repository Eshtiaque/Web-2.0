const loadCountries =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
displayCountries=countries=>{
//  console.log(countries);
 const allCountriesHTML =countries.map(country=>getCountryHTML(country));
//  console.log(allCountriesHTML);
const container =document.getElementById('countries');
container.innerHTML=allCountriesHTML.join(' ');
}
// const getCountryHTML=country =>{
//     return `
//     <div class="country">
//     <h2>${country.name.common}
//     <br>
//     <img src ="${country.flags.png}">
//     </div>
//     `
// }
//using destructuring
// const getCountryHTML=country =>{
//     const {name,flags}=country;
//     return `
//     <div class="country">
//     <h2>${name.common}
//     <br>
//     <img src ="${flags.png}">
//     </div>
//     `
// }
//option 2
const getCountryHTML=({name,flags,area,region}) =>{
    return `
    <div class="country">
    <h2>${name.common}
    <br>
    <p>Area: ${area}</p>
    <p>Area: ${region}</p>
    <img src ="${flags.png}">
    </div>
    `
}
loadCountries();