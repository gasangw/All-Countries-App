import React from 'react';
import { BsSearch } from "react-icons/bs";
import './countries.css'

const Countries = () => {
  return (
    <div className='container'>
      <div className='filter-search-sections'>
        <div className='search-items'>
            <BsSearch className='icon'/>
            <input type='text' className='search-area' placeholder='search for a country'/>
        </div>
        <select className='filter-area'>
            <option value=''>Filter by Region</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
        </select>
      </div>
    </div>
  )
}
export default Countries;