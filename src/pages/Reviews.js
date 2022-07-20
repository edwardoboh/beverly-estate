import React from "react";
import Feedback from "../components/Feedback";
import TestimonialData from "../TestimonialData";


function Review (){

    const FeedbackItems = TestimonialData.map(review =>{
        return(
          <Feedback key={review.id}
          {...review} />
        )
      })


    return (
        <div className="review-items">

         {FeedbackItems}
        </div>
    )
}


export default Review;