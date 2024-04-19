import Dimages from "./dimages";
import SellerInfos from "./sellerInfos";
import './App.css'
import { useParams } from 'react-router-dom';
import data from './data.jsx'

 
export default function Pagedetail(){
   const { id } = useParams();
  const annonce = data.find((a) => a.id === parseInt(id));
  let name = annonce.seller
  let email = annonce.sellerEmail
 return(
        <div className="page-detail-container">
            <div className="pictures">
                <Dimages />
            </div>
            <div className="seller">
                <SellerInfos seller = {name} email={email}/>
            </div>
        </div>
    );
}
