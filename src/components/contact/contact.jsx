import React from 'react';

export function Contact(){
    return(
    <div id="contact">
      <h1 class="contactPageTitle">
        Contact
        <span class="contactDesc">Please</span>
      </h1>
      <div class="contactForm">
        <form>
          <input type="text" class="name" placeholder="Your Name" />
          <input type="email" class="email" placeholder="Your Email" />
          <textarea class="msg" name="message" rows="5" placeholder="Your Message" />
          <button type = "Submit" value='send' class='submitBtn'>Submit</button>
        </form>
      </div>
    </div>)
}
     