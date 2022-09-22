import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {name, flags, capital, continents, area, population} = props.country;
    // console.log(capital)
    const [one,two] = [capital]
    // console.log(props.country)
    return (
        <div className='country'>
         <p>Name: <span>{name.common}</span></p>
         <img src={flags.png} alt="" />
         <p>Capital: {capital? one || two: "No data found"} </p>
         <p>Continents: {continents[0]}</p>
         <p>Area: {area}</p>
         <p>Population: {population}</p>
        
        </div>
    );
};

export default Country;