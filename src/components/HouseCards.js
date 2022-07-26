import React from "react";
import housedata from "../housedata";

function Card () {
    const[data, setData] = React.useState(housedata);


function toggle(){
    setData(prevData =>{

        return{
            ...prevData, 
            favorite: !prevData.favorite
        }
    })
};

return(
    <>
    {data.map(singleData =>{
    let favIcon = singleData.favorite ? "../images/favistrue.png" : "../images/favisfalse.png" ;

return(



    <div className="house-cards" >
    <div className="card-content">
    
        <img src= {`../images/${singleData.housePic}`} className="card-photo" alt="house-view" />
        <div className="price-div">
        <span className="price-headings">Monthly rent</span>
        <span className="price-headings">List Price</span>
        </div>
 
        <div className="prices">
            <h2 className="rent">{singleData.rent}</h2>
            <h2 className="list">{singleData.List}</h2>
            <img src={`..images/${favIcon}`} alt="fav"
            className='favicon'
            onClick={()=>toggle(singleData.id)} 
    
            />
    
        </div>
    
        <h2 className="size">{singleData.size}</h2>
        <h2 className="site">{singleData.site}</h2>
    </div>
    
    </div>
    )
    })}
    
    </>
)



}

export default Card;