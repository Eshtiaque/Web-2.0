import React from 'react';
import{useEffect,useState} from 'react';
import "./Countries.css";
import Country from '../Country/Country';

const Countries = () => {

  
    const [countries, setCountries] = useState([]);
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
      <div className='loko'>
        {
//countries.map(country =><Country country ={country} key={country.cca3}></Country>
          countries.map(country =><Country
             Country ={Country }
            length = {countries.length}
            flag={country.flags.png}
            name={country.name.common}
            area={country.area}
            region={country.region}
            population={country.population}>
          </Country>)
        }
      </div>
    )
  


}
export default Countries;
// Country ={Country }
// flag={country.flags.png}
// name={country.name.common}
// area={country.area}
// region={country.region}
// population={country.population}