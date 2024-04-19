import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './data'
import './App.css'
function Dimages() {
    const { id } = useParams();
    const annonce = data.find((a) => a.id === parseInt(id));  
    const [largeimage,setlargeimage] = useState("/img1.jpg") 
  return (
    <div className="component-details">
      <img src={largeimage} alt="Image" className="large-image" />
      <div className="component-images">
        <img src={"/img1.jpg"} alt="Image" className="small-image"  onClick={(e)=>{setlargeimage("/img1.jpg")}}/>
        <img src="/img2.jpg" alt="Image" className="small-image"  onClick={(e)=>{setlargeimage("/img2.jpg")}}/>
        <img src="/img3.jpg" alt="Image" className="small-image"  onClick={(e)=>{setlargeimage("/img3.jpg")}}/>
        <img src="/img4.jpg" alt="Image" className="small-image"  onClick={(e)=>{setlargeimage("/img4.jpg")}}/>
        <img src="/img5.jpg" alt="Image" className="small-image"  onClick={(e)=>{setlargeimage("/img5.jpg")}}/>
      </div>
    </div>
  );
}

export default Dimages;
