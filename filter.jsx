/*filter.jsx*/
import React, { useState } from 'react';
import data from './data'
import './App.css'

const Filter = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedRate, setSelectedRate] = useState('');

  const [filteredData, setFilteredData] = useState([]);

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleRateChange = (event) => {
    setSelectedRate(event.target.value);
  };
  const handleFilter = () => {
    const filtered = data.filter(item => {
      const price = typeof item.price === 'string' ? parseInt(item.price.replace(/\D/g, ''), 10) : item.price;
      return price >= parseInt(minPrice) && price <= parseInt(maxPrice);
      
    });
    if (selectedRate !== '') {
      filtered = filtered.filter(item => item.rate === selectedRate);
    }
    setFilteredData(filtered);
    onFilterChange(filteredData);
  };
  return (
    <>
    <br />
    <div className="filter1">
    <h1 id='filter'>Filter :</h1>
      <div className='filter-form'>
        <div className="filter-options">
          <label>Price Range:</label>
          <div className="price-inputs">
            <input
              type="number"
              id="min_price"
              name="min_price"
              placeholder="Min"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="number"
              id="max_price"
              name="max_price"
              placeholder="Max"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
        <hr className="separator" />
        <div className="filter-options">
          <label>Sort by Likes:</label>
          <div className="radio-options">
            <input type="radio" id="likes_passable" name="likes" value="passable" 
                     onchange={handleRateChange}
                      />
            <label htmlFor="likes_passable">Passable</label>

            <input type="radio" id="likes_bien" name="likes" value="bien" 
                     onchange={handleRateChange}
                      />
            <label htmlFor="likes_bien" id="likes_bien">Bien</label>

            <input type="radio" id="likes_tres_bien" name="likes" value="trés bien" 
                      onchange={handleRateChange}
                      />
            <label htmlFor="likes_tres_bien">Très bien</label>

            <input type="radio" id="likes_fabuleux" name="likes" value="fabuleux" 
                   onchange={handleRateChange}
                      />
            <label htmlFor="likes_fabuleux">Fabuleux</label>
          </div>
        </div>
        <hr className="separator" />
        <div className="filter-options">
        <label>Sort by Time:</label>
        <div className="radio-options">
          
        <input
            type="radio"
            id="1day"
            name="1day"
            value="1day"
          />
          <label htmlFor="1_day">1 day</label>
          <input
            type="radio"
            id="1week"
            name="1week"
            value="1week"
          />
          <label htmlFor="1_week">1 week</label>

          <input
            type="radio"
            id="1mounth"
            name="1mounth"
            value="1mounth"
          />
          <br />
          <label htmlFor="1_mounth">1 mounth</label>

        </div>
        </div>
        <hr className="separator" />
        <div className="filter-options">
          <label>Sort by Category:</label>
          <div className="checkbox-options">
            <input type="checkbox" id="category_parce" name="category" value="parce" />
            <label htmlFor="category_parce">Parce</label>

            <input type="checkbox" id="category_picine" name="category" value="picine" />
            <label htmlFor="category_picine">Picine</label>

            <input type="checkbox" id="category_salle" name="category" value="salle" />
            <label htmlFor="category_salle">Salle</label><br />

            <input type="checkbox" id="category_baine" name="category" value="baine" />
            <label htmlFor="category_baine">Baine</label>

            <input type="checkbox" id="category_wifi" name="category" value="wifi" />
            <label htmlFor="category_wifi">Wifi</label>

            <input type="checkbox" id="category_sindice" name="category" value="sindice" />
            <label htmlFor="category_sindice">Sindice</label><br />

            <input type="checkbox" id="category_caméra" name="category" value="caméra" />
            <label htmlFor="category_caméra">Caméra</label>

            <input type="checkbox" id="category_marché" name="category" value="marché" />
            <label htmlFor="category_marché">Marché</label>
          </div>
        </div>
        <hr className="separator" />
        <button className="button" type="submit" onClick={handleFilter}>Apply Filters</button>{console.log(selectedRate)}
      </div>
   </div> </>
  );
};
export default Filter;