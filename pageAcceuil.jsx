import closeIcon from "./assets/close.svg";
import Localisation_icon from "./assets/Localisation_icon.svg";
import arrow_down from "./assets/arrow_down.svg";
import './App.css';
import { useState } from "react";
import BottomFilter from "./BottomFilter";
import data from "./data";
import Card2 from "./card2";
import Filter from "./filter";
import Populair from "./populair";
import Footer from "./footer";
import Header from "./header";
import Figma from "./card1";

function Acceuill() {
  const [showFilters, setShowFilter] = useState(false);
  const [city, setCity] = useState("");  
  const [numberOfBaths, setNumberOfBaths] = useState("");
  const [numberOfEtag, setNumberOfEtag] = useState("");
  const [surface, setSurface] = useState("");
  const [type, setType] = useState("");
  const [displayResult, setDisplayResult] = useState(false);
  const[ImageClickedId,SetImageClickedId] = useState('r1')

  function filterData() {
    let tempData = [...data];

    if (city !== "") {
      tempData = tempData.filter(el => el.city.startsWith(city));
    }

    if (numberOfEtag !== "") {
      tempData = tempData.filter(el => el.etages === parseInt(numberOfEtag));
    }

    if (surface !== "") {
      tempData = tempData.filter(el => el.surface.startsWith(surface));
    }

    setFilteredData(tempData);
    setDisplayResult(true);
  }
  const [filteredData, setFilteredData] = useState([]);

  const handleFilterChange = (filteredData) => {
    setFilteredData(filteredData);
  };
  function showresults() {
    var element = document.querySelector(".beforeResult");
    if (element) {
        element.style.transition = "opacity 0.3s ease"; // Apply transition effect
        element.style.opacity = "0"; // Set opacity to 0
        setTimeout(function() {
            element.style.display = "none"; // Hide element after transition
            var results2 = document.querySelector(".results2");
            if (results2) {
                results2.style.display = "block"; // Change display of results2 to 'flex'
            }
        }, 300); // 300 milliseconds = 0.3 seconds, matching the transition duration
    }
}

  return (
    <>
    
    <div className='bgimg'><Header/>
       <div className="rechercheComponent">
    <div className="App">
      <section className="search-wraper">
        <h1>Find your future house</h1>
        <div className="tabs-top">
          <button value="acheter" onClick={(e)=>{setType(e.target.value)}}>Acheter</button>
          <button value="louer" onClick={(e)=>{setType(e.target.value)}}>Louer</button>
          <button>Je mets inscrire</button>
          <button>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
        <div className="search_section">
          <div className="search_top">
            <div className="input_wraper">
              <label htmlFor="Localisation">Localisation</label>
              <div>
                <img src={Localisation_icon} alt="Localisation_icon" />
                <input
                  type="text"
                  placeholder="Localisation"
                  id="Localisation"
                  onChange={(e)=>{setCity(e.target.value)}}
                />
              </div>
            </div>
            <div className="input_wraper">
              <label htmlFor="Localisation">Type</label>
              <div>
                <input type="text" placeholder="Maison" onChange={(e)=>{setType(e.target.value)}}/>
              </div>
            </div>
            <div className="input_wraper">
              <label htmlFor="Localisation">Surface</label>
              <div>
                <input type="text" placeholder="550" onChange={(e)=>{setSurface(e.target.value)}}/>
                <span>m²</span>
              </div>
            </div>

            <div className="input_wraper">
              <label htmlFor="Etage">Etage</label>
              <div>
                <input type="text" placeholder="1 ére" onChange={(e)=>{setNumberOfEtag(e.target.value)}} />
              </div>
            </div>

            <div className="input_wraper">
              <label htmlFor="Etage">Baths</label>
              <div>
                <input type="number" placeholder="1" onChange={(e)=>{setNumberOfBaths(e.target.value)}}/>
              </div>
            </div>
            <div className="input_wraper input_wraper_last">
            <button id="search_Btn" onClick={() => { filterData(); showresults(); }}>Search</button>
            </div>
          </div>
          {showFilters && <BottomFilter />}
          <div className="quick_search">
            <button onClick={() => setShowFilter(!showFilters)}>
              Recherche Rapide{" "}
              <img
                className={showFilters && "rotate"}
                src={arrow_down}
                alt=""
              />
            </button>
          </div>
        </div>
      </section>
    </div></div></div> <br></br>
    <div className="beforeResult">
      <Populair/>
    </div>
    <div className="results2">
    <Filter onFilterChange={handleFilterChange}/> <img src="save.png" alt="" id='sauv' /><img src="r1.png" alt="" id='r1' onClick={()=>{SetImageClickedId('r1')}}/>
      <img src="r2.png" alt="" id='r2' onClick={()=>{SetImageClickedId('r2')}}/><div className="results1">
      {ImageClickedId == 'r2' ? (filteredData && filteredData.map((item, index) => (
        <Card2
          id={item.id}
          type={item.type}
          price={item.price}
          seller={item.seller}
          time={item.time}
          surface={item.surface}
          address={item.address}
          image={item.image}
          rate={item.rate}
        />
      ))) : (filteredData && filteredData.map((item, index) => (
      <Figma
        id={item.id}
        type={item.type}
        price={item.price}
        seller={item.seller}
        time={item.time}
        surface={item.surface}
        address={item.address}
        image={item.image}
        rate={item.rate}
      />)))}
    </div></div><br /><br /> <Footer/></>
  );
}

export default Acceuill;
