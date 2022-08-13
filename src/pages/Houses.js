import React from "react";
import Card from "../components/HouseCards";
import housedata from "../housedata";
import Location from "./Location";

function Houses (){

    const HouseElements = housedata.map(house =>{
        return(
            <Card key={house.id}
            {...house}
            />
        ) 
    })

const[showMap, setShowMap] =React.useState(true);

function toggleMap(){
    setShowMap(prevMap => !prevMap)
}



    return (
<div>



    <button className="map-view"
    onClick={toggleMap}
   
    >{ showMap ? "Hide map" : "Show map"}</button>
    
{showMap && <div className="LA-map">
    
<Location />  

</div>    }
 


    { showMap && <div className="HouseElements">
         
      
        {HouseElements}
    </div>}
        </div>
    )
}

export default Houses;