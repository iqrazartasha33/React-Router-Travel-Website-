import React from "react";

function Contactpage() {
    return (
 <>
   <section className="contact-section">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required placeholder="Your full name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder="Your email address" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required placeholder="Write your message here..."></textarea>

         <button 
         type="submit" 
         className="submit-button" 
          onClick={() => alert("Form submitted successfully!")}
          >
          Send Message!
        </button>
      </form>
    </section>       
     </>
    );
}

export default Contactpage;