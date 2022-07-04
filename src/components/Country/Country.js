import React from 'react';
import './Country.css';

const Country = (props) => {
    return props.Countries && (
        <div className="CountryList">
            <ul>
                {props.Countries.map(country => (
                    <li
                        key={country.id}
                        onClick={() => props.onCountryHandle(country.alpha3Code)}
                        className="List"
                    >{country.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Country;
