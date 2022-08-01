import React from "react";

function Card ({id, housePic, rent, List, size, site, favorite}) {
    
    const[data, setData] = React.useState(
        {id, housePic, rent, List, size, site, favorite}
    );
    const favIcon = data.favorite ? "../images/favistrue.png" : "../images/favisfalse.png"

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
            
            <div className="house-cards" >
                <div className="card-content">
                
                    <img src= {`../images/${housePic}`} className="card-photo" alt="house-view" />
                    <div className="price-div">
                    <span className="price-headings">Monthly rent</span>
                    <span className="price-headings">List Price</span>
                    </div>
            
                    <div className="prices">
                        <h2 className="rent">{rent}</h2>
                        <h2 className="list">{List}</h2>
                        <img src={`..images/${favIcon}`} alt="fav"
                        className='favicon'
                        onClick={toggle} 
                
                        />
                
                    </div>
                
                    <h2 className="size">{size}</h2>
                    <h2 className="site">{site}</h2>
                </div>
            </div> 
        </>
    )
}

export default Card;