import React, { useState } from "react";

function BottomFilter() {
  const [bedrooms, setBedrooms] = useState(0);
  const [bedes, setbedes] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [livingroom, setLivingroom] = useState(0);
  return (
    <div className="Bottom_Filter">
      <div className="Room_bed_wraper">
        <h4>Room & bedes</h4>
        <div className="Room_bed">
          <span>Bedes</span>
          <div class="number">
            <button onClick={() => setbedes(bedes - 1)}>-</button>
            <span>{bedes}</span>
            <button onClick={() => setbedes(bedes + 1)}>+</button>
          </div>
        </div>
        <div className="Room_bed">
          <span>Bedrom</span>
          <div class="number">
            <button onClick={() => setBedrooms(bedrooms - 1)}>-</button>
            <span>{bedrooms}</span>
            <button onClick={() => setBedrooms(bedrooms + 1)}>+</button>
          </div>
        </div>
        <div className="Room_bed">
          <span>Bathroom</span>
          <div class="number">
            <button onClick={() => setBathrooms(bathrooms - 1)}>-</button>
            <span>{bathrooms}</span>
            <button onClick={() => setBathrooms(bathrooms + 1)}>+</button>
          </div>
        </div>
        <div className="Room_bed">
          <span>Livignroom</span>
          <div class="number">
            <button onClick={() => setLivingroom(livingroom - 1)}>-</button>
            <span>{livingroom}</span>
            <button onClick={() => setLivingroom(livingroom + 1)}>+</button>
          </div>
        </div>
      </div>
      <div className="Room_bed_wraper">
        <h4>Facilites</h4>
        <div className="Room_bed">
          <span>Parking</span>

          <input type="checkbox" id="name" name="name" />
          <label class="ios-checkbox" for="name"></label>
        </div>
        <div className="Room_bed">
          <span>S'indice</span>
          <input type="checkbox" id="1" name="1" />
          <label class="ios-checkbox" for="1"></label>
        </div>
        <div className="Room_bed">
          <span>Security</span> <input type="checkbox" id="2" name="2" />
          <label class="ios-checkbox" for="2"></label>
        </div>
        <div className="Room_bed">
          <span>Meubler</span>
          <input type="checkbox" id="3" name="3" />
          <label class="ios-checkbox" for="3"></label>
        </div>
        <div className="Room_bed">
          <span>wifi</span>
          <input type="checkbox" id="4" name="4" />
          <label class="ios-checkbox" for="4"></label>
        </div>
      </div>
      <div className="Room_bed_wraper">
        <div className="Price_range_wraper">
          <h4>Price Range</h4>
          <select name="" id="">
            <option value="dollar">Usd</option>
            <option value="euro">Euro</option>
            <option value="Mad">Mad</option>
          </select>
        </div>
        <input type="range" name="" id="range_price" />
      </div>
      {/*<div className="Room_bed_wraper map_wraper">
        <iframe
          title="me"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d53190.243131969706!2d-7.686202158339105!3d33.56921684283989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scasa!5e0!3m2!1sen!2sma!4v1711236135165!5m2!1sen!2sma"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>*/ }
    </div>
  );
}

export default BottomFilter;