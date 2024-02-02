import React from 'react';

export function Contact(){
    return(
    <div id="contact">
      <h1 className="contactPageTitle">
        Contact
        <span className="contactDesc">Please</span>
      </h1>
      <div className="contactForm">
        <form>
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" />
          <button type = "Submit" value='send' className='submitBtn'>Submit</button>
        </form>
      </div>
    </div>)
}
     