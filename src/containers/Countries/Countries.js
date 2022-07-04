import React, {useEffect, useState} from 'react';
import FullInfo from "../../components/FullCountry/FullInfo";
import {BASE_URL, BORDER_URL } from "../../config";
import Country from "../../components/Country/Country";
import axios from "axios";
import './Countries.css';


const Countries = () => {
    const [countries, setCountries] = useState(null);
    const [countryInfo, setCountryInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(BASE_URL);
            setCountries(response.data.map(city =>
                ({
                    ...city,
                    id: Math.random()
                })));
        }

        fetchData().catch(e => console.log(e));
    }, []);


    const onCountryHandle = alfa => {
        const fetchData = async () => {
            const response = await axios(BORDER_URL + alfa);
            setCountryInfo(response.data);
        };
        fetchData().catch(e => console.log(e));
    };

    return (
        <>
            <div className="Container">
                <Country
                    onCountryHandle={onCountryHandle}
                    Countries={countries}
                />
                <FullInfo
                    CountryInfo={countryInfo}
                />
            </div>
        </>
    );
};
export default Countries;