import React from "react";
import Pic from "../assets/w&m.png"


function About(){
    return (
        <div>
            <h1 className="Name">Meet Marty & Wendy Byrde</h1>
            <div className="about-info">
        <h2 className="bio"> 
        Marty and Weny are the Beverly Hills and surrounding area experts in the
        lease purchase program. They are commited to making homeownership a reality for 
        more people. The program provides a clear path to home ownership. Our process
        is easy, transparent, and built on a foundation of choice and flexibility. Marty
        and Wendy are helping more people get into great homes, in neighborhoods they love,
         with the opportunity to build a more secure financial future.

         <br></br>
        Ready to take the first step toward homeownership?
        <br></br>
        Apply today.
        </h2>
            <img src={Pic} alt='Marty and Wendy' className="ozark"></img>

            </div>
        </div>
    )
}

export default About;