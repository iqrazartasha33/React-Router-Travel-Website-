import React from "react";
function Aboutpage() {
    return (
    <>
  <div className="about-section">
    <h2>About Us</h2>
    <p>
      At <span className="highlight">International Travel Agency</span>, we are dedicated to crafting
      unforgettable travel experiences for every adventurer. Whether you seek stunning landscapes, cultural
      immersion, or thrilling adventures, we have the perfect itinerary for you.
      <br /><br />
      Our mission is to connect you with the world, making travel simple, enjoyable, and inspiring.
      Join us on a journey to explore the world's most beautiful destinations, discover new cultures, and create
      lasting memories.
    </p>
    <button 
     className="explore-button" 
      onClick={() => alert("Start your adventure today! Discover our travel packages.")}
     >
      Explore Now!
     </button>
  </div>
</>
    );
}

export default Aboutpage;
