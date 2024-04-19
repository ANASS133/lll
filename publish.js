// import { useState } from "react";
// import './css/App.css';
// import Ajouter from "./Components/Ajouter";
 import Details from "./ppDetails";
 import Contact from "./ppContact";
 import Alert from "./ppAlert";
import React, { useState } from "react";
import Ajouter from "./Ajouter";


export default function Publish1(){

const [infos,setinfos]=useState({
     
})
const [ conter,setconter]=useState(0)
const handelCom = ({data})=>{
    setinfos({infos,...data
    })
    console.log(infos)
    if(conter<4){ setconter(conter+1)}
}
const rethandel=()=>{
    setconter(0)
}
const retOnehandel=()=>{
    if(conter>0){ setconter(conter-1)}
}
if(conter===0){
   return <Ajouter func ={handelCom} />

}else if(conter===1){
    return <Details func ={handelCom} func1={retOnehandel}/>

}
else if(conter===2){
    return <Contact func ={handelCom} func1={retOnehandel}/>

}
else{

    return(
        <Alert func={rethandel}/>
    )}
}

