import React, { useState } from "react";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [roomsAndBeds, setRoomsAndBeds] = useState("Room & Beds");
  const [facilities, setFacilities] = useState("Facilities");
  const [priceRange, setPriceRange] = useState("Price Range");
  const [usd, setUsd] = useState("USD");
  const [bedrooms, setBedrooms] = useState(3);
  const [baths, setBaths] = useState("");
  const [bathrooms, setBathrooms] = useState(3);
  const [livingroom, setLivingroom] = useState("Livingroom");
  const [plusThree, setPlusThree] = useState("+3");
  const [meuble, setMeuble] = useState("Meubler");
  const [wifi, setWifi] = useState("Wifi");
  const [parking, setParking] = useState("Parking");
  const [security, setSecurity] = useState("Security");
  const [sindice, setSindice] = useState("Sindice");
  const [priceFrom, setPriceFrom] = useState("50$");
  const [priceTo, setPriceTo] = useState("10000$");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faire quelque chose avec les valeurs des champs
  };

  const handleClick = () => {
    setRoomsAndBeds("Room & Beds");
    setFacilities("Facilities");
    setPriceRange("Price Range");
    setUsd("USD");
    setBedrooms("+3");
    setPlusThree("+3");
    setBathrooms(3);
    setMeuble("Meubler");
    setLivingroom("Livingroom");
    setWifi("Wifi");
    setParking("Parking");
    setSecurity("Security");
    setSindice("Sindice");
    setPriceFrom("50$");
    setPriceTo("10000$");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Localisation</label>
        <br />
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <label htmlFor="type">Type</label>
        <br />
        <select
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Tous</option>
          <option value="maison">Maison</option>
          <option value="appartement">Appartement</option>
        </select>
        <br />
        <label htmlFor="minPrice">Prix Min</label>
        <br />
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <br />
        <label htmlFor="maxPrice">Prix Max</label>
        <br />
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <br />
        <label htmlFor="baths">Baths</label>
        <br />
        <input
          type="number"
          id="baths"
          name="baths"
          value={baths}
          onChange={(e) => setBaths(e.target.value)}
        />
        <br />
        <button type="submit">Rechercher</button>
      </form>
      <div>
        <button onClick={handleClick}>Recherche Rapide</button>
        <br />
        <div>
          <h1>{roomsAndBeds}</h1>
          <p>
            {bedrooms} Beds {plusThree}
          </p>
          <p>{bathrooms} Bathrooms</p>
        </div>
        <div>
          <h1>{facilities}</h1>
          <p>{parking}</p>
          <p>{security}</p>
          <p>{meuble}</p>
          <p>{livingroom}</p>
          <p>{wifi}</p>
        </div>
        <div>
          <h1>{priceRange}</h1>
          <p>{usd}</p>
          <p>
            {priceFrom} - {priceTo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;