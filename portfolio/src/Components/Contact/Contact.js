import React from 'react'
import mail_icon from "../../assests/mail_icon.svg"
import location_icon from "../../assests/location_icon.svg"
import call_icon from "../../assests/call_icon.svg"
import "./Contact.css"

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa907b61-cf81-4872-9236-dd19fadf4e97");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>lets talk</h1>
          <p>
            I'am currently available to take on new project, so feel free to
            send me a message.Contact anytime you want
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>siddhant14k@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Pune, India</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>91-9921460202 </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write Your Message Hear</label>
          <textarea name="message" rows={6  } placeholder='Enter your message' id=""></textarea>
          <button type='submit' className='contact-submit'>Submitnow</button>
        </form>
      </div>
    </div>
  );
}
