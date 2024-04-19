import './App.css'
export default function PopulairCard(props) {
      return (
          <div className="rectangle-1222">
          
          <img src={props.img} className="rectangle-1219">
          </img>
          <div className="maison-vendre-casablanca">
{props.type}          </div>
          <div className="ain-diab-casa-blanca">
{props.adress}          </div>
          <div className="dh">
            {props.price} DH
          </div>
          <div className="m">
            {props.surface} 
          </div>
          <div className="container">
            <img className="five-2" src="/five2.png" />
            <div className="frame-427318912">
              <span className="container">
                +
              </span>
              <span className="voire-plus">
                Voire plus
              </span>
            </div>
          </div>
          </div>
      )
    }