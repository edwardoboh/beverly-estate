import React from "react";
import Card from "../components/HouseCards";
import housedata from "../housedata";


function Houses (){

    const HouseElements = housedata.map(house =>{
        return(
            <Card key={house.id}
            {...house}
            />
        ) 
    })

    return (
        <div>
            {HouseElements}
        </div>
    )
}

export default Houses;