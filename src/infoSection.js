import React from "react";

function Steps({heading, description}){
    return(
        <div className="info-section">
             <h2 className="steps-heading">{heading}</h2>
            <h2 className="steps-description">{description}</h2>
        </div>
    )
}

export default Steps;