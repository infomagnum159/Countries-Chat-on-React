import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BORDER_URL} from "../../config";
import './FullInfo.css';
import {nanoid} from "nanoid";

const FullInfo = props => {
    const [borders, setBorders] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (props.CountryInfo !== null) {
                const bordersC = props.CountryInfo.borders.map(async border => {
                    return await axios.get(BORDER_URL + border);
                });
                const bordersCountry = await Promise.all(bordersC);
                setBorders(bordersCountry.map(border => {
                    return border.data.name;
                }));
            }

        };
        fetchData().catch(e => console.error(e));
    }, [props.CountryInfo]);

    return props.CountryInfo && (
        <div className="CountryInfo">
            <p>Страна {props.CountryInfo.name}</p>
            <p><img src={props.CountryInfo.flag} width="150px" height="auto" alt="FLAG"/></p>
            <p>Столица {props.CountryInfo.capital}</p>
            <p>Регион {props.CountryInfo.region}</p>
            <p>Население {props.CountryInfo.population} чел</p>
            {borders && (<ul>{borders.length > 0 ? 'Граничит с:' : 'Does not border with other countries'}{borders.map(border => {
                return (<li key={nanoid()}><p>{border}</p></li>
                )})}</ul>)}
        </div>
    );
};

export default FullInfo;