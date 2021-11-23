import React, { useState } from "react";
import "./Contact.css";
import emailjs from 'emailjs-com';


const Result =() =>{

    return(
      <p>Your message has been successfully sent. i will contact you soon</p>
    )
}

const Contact = () => {
  const [result,showResult] = useState(false);

      const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_waqujbr', 'template_eqdmp8b', e.target, 'user_FLCwzFqK5ymjUnsCTOQMh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true)
      };

      //hide results
      setTimeout(() => {
        showResult(false)
      },5000)

  return (
    <div className="container main-part">



      {/* .................information part................ */}



      <div className="title">
        <h2>Contact me</h2>
      </div>

      <div className="row">
        <div className="details col-md-6">
          <h3>Get in Touch</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            aperiam tempora animi nihil provident, adipisci vel!{" "}
          </p>

          <br />

          <h5>Name</h5>
          <p>Yeasir Arafat</p>

          <h5>Address</h5>
          <p>Gazipur Dhaka bangladesh</p>

          <h5>Email </h5>
          <p>yeasirarafat1776@gmail.com</p>
          
         
        </div>





        {/* ...............form part................... */}

        <div className="message-box  col-md-6">
          <h3 className="text">Message me</h3>

          <form action="#" onSubmit={sendEmail}>
            <div className="fields">
              <div className="field name">
                <input type="text" name="fullName" placeholder="Name" required />
              </div>
              <div className="field email">
                <input type="email" name="email" placeholder="Email" required />
              </div>
            </div>

            <div className="field">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>

            <div className="field textarea">
              <textarea name="message" placeholder="Message.." required></textarea>
            </div>

            <div className="button-area">
              <button className="submit">Send Message</button>
            </div>

            <div className="row">
              {result ? <Result/> : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
