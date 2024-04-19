import './App.css';

const list = [
  {
    title: "settat",
    img: "photo copy.jpg"
  },
  {
    title: "settat",
    img: "pixasquare-dFBPEUfwPDc-unsplash.jpg"
  },
  {
    title: "settat",
    img: "pixasquare-dFBPEUfwPDc-unsplash.jpg"
  },
  {
    title: "settat",
    img: "pixasquare-dFBPEUfwPDc-unsplash.jpg"
  },
  {
    title: "settat",
    img: "pixasquare-dFBPEUfwPDc-unsplash.jpg"
  },
  {
    title: "settat",
    img: "pixasquare-dFBPEUfwPDc-unsplash.jpg"
  },
];

export default function Card21() {
  return (
    <div className='card21'>
      <h1>Explore City</h1>
      <span>lorem ppay sendo rijhu nugys ghvfdr dore any some lared hiut  </span>
      <div className="container">
        <div className="row">
          {list.map((item, index) => (
            <div className="col-4" key={index}>
              <h3>{item.title}</h3>
              <img src={item.img} alt={item.title} />
              <p>Show more for this</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
