import React from "react";


function Feedback({quote, review, customer, address, rating}){
    return(

        <div className="review-box">
            <h1 className="quote">{quote}</h1>
            <h2 className="review">{review}</h2>
            
            <div className="author">
            <h2 className="customer">{customer}</h2>
            <h2 className="address">{address}</h2>
            
        </div>
        <div className="star">

            <img src={`../images/${rating}`} className="star-icon" alt="star" />
            <img src={`../images/${rating}`} className="star-icon" alt="star" />
            <img src={`../images/${rating}`} className="star-icon" alt="star" />
            <img src={`../images/${rating}`} className="star-icon" alt="star" />
            <img src={`../images/${rating}`} className="star-icon" alt="star" />
            </div>

        </div>
    )
};

export default Feedback;