import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
export default function Figma(props) {
  return (
    <>
    <div className="card1">
    <div className="card-container">
      <div className="card-header">
        <img src={props.image} alt="House" className="img" style={{ width: '250px' }} />
      </div>
      <div className="card-content">
        <div className="card-type">{props.type}</div>
        <div className="card-price">{props.price}$</div>
        <div className="card-details">
          <p>{props.address}</p>
          <p>{props.surface}</p>
          <div className="card-agent">
            <img src='icon2.png' alt="Agent" className="icon" />
            <p id="seller-name">{props.seller}</p>
            <img src='icon1.png' alt="Time" className="icon" />
            <p className="card-time">{props.time}</p>
          </div>
        </div>
        <Link to={`/details/${props.id}`} className="details-button" >Details</Link>
      </div>
    </div><br /></div></>
  )}