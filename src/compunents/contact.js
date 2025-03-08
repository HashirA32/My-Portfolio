import React from "react";


const ContactForm = () => {
  return (
    <div className="Contact-container">
        <div className="Form-side">
        <h2>Get In Touch</h2>
        <form>
            <div className="fields">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
            </div>
             <textarea placeholder="Message" required></textarea>
            <button className="btn-contact" type="submit">SEND MESSAGE</button>
        </form>
        </div>
        <div className="contact-info">
          <p className="Contact-data">
            <strong>Email</strong>
            <br />
            hashirofficiala32@gmail.com
          </p>
          <p className="Contact-data">
            <strong>Phone</strong>
            <br />
            +92 314-0848919
          </p>
          <p className="Contact-data">
            <strong>Location</strong>
            <br />
            29111 Teh: Pahapur,Dist:Dera Ismail Khan, KPK, Pakistan.
          </p>
        </div>
     
    </div>
  );
};

export default ContactForm;
