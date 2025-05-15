import React from "react";

function Homepage() {
  return (
<>
  <section className="left-side">
    <h4>Do Enjoy</h4>
    <h1>
      International <br/>
        Travel Agency
    </h1>
      <p className="info-paragraph">
      Explore the world with us. Book your next adventure today!
     Discover new places and create unforgettable memories.

    </p>
    <button 
     className="book-button" 
      onClick={() => alert("Your booking was successful!")}     >
      Book Now!
    </button>
  </section>
  <section className="right-side"></section>
</>


  );
}

export default Homepage;



