import './App.css'
import data from './data'
import PopulairCard from './populairCard'
import Categories from './categories';
import Card21 from './Card21';
export default function Populair() {
  
  
    const sortedData = data.slice().sort((a, b) => b.starsNumber - a.starsNumber);
  const topThreeObjects = sortedData.slice(0, 3);

      return (<>
        <div className="populair1">
                  <div className="populaire-rsistance">
        Populaire résistance
      </div>
      <img src='/arrow.png' className="arrow">
      </img>
      <div className="rectangle-1221"></div>
      <div className="populair-card-container">
      {topThreeObjects.map((item, index) => (
          <PopulairCard
            img = {item.image}
            key={index}
            type={item.type}
            adress={item.address} // I assume this is a typo, should be "address" instead of "adress"
            price={item.price}
            surface={item.surface}
          />
        ))}
</div>

      </div><br /><br /><br /><Categories/><br /><br /><Card21/>
      </>
      )
    }