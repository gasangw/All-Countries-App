import React from 'react';
import { BsSearch } from "react-icons/bs";
import AllCountries from './AllCountries';
import { useState } from 'react';
import data from '../../data.json'
import './countries.css'

const Countries = ({theme}) => {
   const [inputValue, setInputValue] = useState('');
   const [area, setArea] = useState('')

   const getValue = (e) => {
      setInputValue(e.target.value)
   }

   const regionCountries =(e) =>{
     setArea(e.target.value)
   }
  return (
    <div className='container'>
      <div className='filter-search-sections'>
        <div className='search-items'>
            <BsSearch className='icon'/>
            <input type='text' className='search-area' placeholder='search for a country' onChange={getValue}/>
        </div>
        <select className='filter-area' onChange={regionCountries}>
            <option value=''>Filter by Region</option>
            <option value='Africa'>Africa</option>
            <option value='America'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
        </select>
      </div>
      <div className='data-display'>
        {
            data && data.filter((country) => {
                return country.region.includes(area)
            }).filter((val) =>{
              return val.name.toLowerCase().includes(inputValue)
            }).map((value)=> {
                return <AllCountries info={value} theme={theme} key={value.name}/>
            })
        }
      </div>
    </div>
  )
}
export default Countries;