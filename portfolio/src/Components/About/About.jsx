import React from 'react'
import "./About.css"
import about_left_img from "../../assests/Aboutme.svg"

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title ">
        <h1 className="text-primary-emphasis">ABOUT ME</h1>
      </div>
      <div className="container mt-3 ">
        <div className="row ">
          <div className="col-6 left-info">
            <img
              src={about_left_img}
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-6 bg-light text-dark rounded-1 lh-sm my-details ">
            <div className="info">
              Web Developer with expertise of React.js, Redux, Cloud Firestore,
              HTML and CSS. currently learning React Native for Mobile
              Application.
            </div>
            <br />
            <div>
              I am passionate programmer and a learner, born and brought up in
              India.Currently, I am enrolled in FullStack - Web Development
              Program "Conducted by AlmaBetter".
            </div>
            <br />
            <div>
              Along with that, I also help people as a COACH on their journey of
              becoming a professional programmer.
            </div>

            <br />
            <div>
              I love learning about new technologies, what problems are they
              solving and How can I use them to build better and scalable
              products.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
