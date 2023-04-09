import React from 'react';
import "./Country.css";
const Country = (props) => {
    // console.log(props.country);
    // const {area,region,population}=props.country;
    //destructaring
    return (
    <div className='country'>
      <p><strong>Available Country : {props.length}</strong></p>
      <h2>Name:{props.name}</h2>
        <img src={props.flag} alt=''></img>
      <p>Population : {props.population}</p>
      <p><small>Area : {props.area}</small></p>
      <p><small>Region : {props.region}</small></p>
    </div>
  )
};

export default Country;