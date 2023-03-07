import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data.json";
import { BsArrowLeft } from "react-icons/bs";
import "./countries.css";

const CountryDetails = () => {
  const { name } = useParams();
  const country = data.find((country) => country.name === name);
  const {
    flags,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = country;
  return (
    <div className="container-countryDetails">
      <div className="GoBack">
        <Link to="/" className="link">
          <BsArrowLeft /> Back
        </Link>
      </div>
      <div className="main-area" key={name}>
        <div>
          <img src={flags.svg} alt="flag" className="myFlag"/>
        </div>
        <div className="sub-area">
          <div>
            <h1>{name}</h1>
            <ul className="item-lists">
              <li>
                <span>Native Name: </span>
                {nativeName}
              </li>
              <li>
                <span>Population: </span>
                {population}
              </li>
              <li>
                <span>Region: </span>
                {region}
              </li>
              <li>
                <span>Sub Region: </span>
                {subregion}
              </li>
              <li>
                <span>Capital: </span>
                {capital}
              </li>
            </ul>
          </div>
          <div className="currency-sect">
            <ul className="item-lists">
              <li>
                <span>Top Level Domain: </span>
                {topLevelDomain}
              </li>
               { 
                 currencies.map((moni) => {
                    return (
                      <li key={moni.name}>
                        <span>Currencies: </span>
                        {moni.name}
                      </li>
                    )
                 })
               }
               {
                 languages.map((lan)=> {
                    return (
                      <li key={lan.name}>
                        <span>Top Level Domain: </span>
                        {lan.name}
                      </li>
                    )
                 })
               }
            </ul>
          </div>
        </div>
      </div>
      <div className="borders">
        <h6>Border Countries: </h6>
         {
            borders && borders.map((bord) => {
              return (
                <div className="eachBorder-country">
                     <li>{bord}</li>
                </div>
              )
            })
         }
      </div>
    </div>
  );
};

export default CountryDetails;
