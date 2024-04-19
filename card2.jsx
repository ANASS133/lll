import { Link } from 'react-router-dom';
import './App.css'
export default function Card2(props) {
    return (
      <div className="card-container1">
        <div className="card1">
          <img src={props.image} alt="House" className="img1" />
          <div className="card-details1">
            <div className="card-type1">{props.type}</div>
            <div className="card-price1">{props.price}$</div>
            <p className="card-address1">{props.address}</p>
            <p className="card-surface1">{props.surface}</p>
                      
<br />            <div className="card-agent1">
              <img src='/icon2.png' alt="Agent" className="icon1" />
              <p id="seller-name">{props.seller}</p>
              <img src='/icon1.png' alt="Time" className="icon1" />
              <p className="card-time1">{props.time}</p>
            </div><Link to={`/details/${props.id}`} className="details-button1" style={{ margin: '10px' }}>Details</Link>
          </div>
        </div>
      </div>
    );
  }
  