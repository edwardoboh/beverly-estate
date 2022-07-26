import React from "react";
import housedata from "../housedata";

function Card () {
    const[data, setData] = React.useState(housedata);

let favIcon = data.favorite ? "favistrue.png" : "favisfalse.png" ;

function toggle(){
    setData(prevData =>{

        return{
            ...prevData, 
            favorite: !prevData.favorite
        }
    })
}

<div className="house-cards">
<div className="card-content">

    <img src={`./assets/${data.housePic}`} className="card-photo" alt="house-view"/>
    <span>Monthly rent</span>
    <span>List Price</span>
    <div className="prices">
        <h2 className="rent">{data.rent}</h2>
        <h2 className="list">{data.list}</h2>
        <img src={`..images/${favIcon}`} alt="fav"
        className='favicon'
        onClick={toggle} 

        />

    </div>

    <h2 className="size">{data.size}</h2>
    <h2 className="site">{data.site}</h2>
</div>

</div>

}

export default Card;