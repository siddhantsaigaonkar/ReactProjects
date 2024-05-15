import React from 'react'
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from '../../../assests/profile_imgmy.jpg'
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profileImg" />
      <h1>
        {" "}
        <span>I'm Siddhant Saigaonkar,</span> Frontend Devloper based in India.{" "}
      </h1>
      <p>
        I am an aspiring Frontend Developer hailing from Pune, Maharashtra, with
        a fervent dedication to mastering frontend technologies.I love building
        websites! I'm just starting out in my career, but I'm super passionate
        about learning and creating cool stuff with code. I live in Pune,
        Maharashtra. Even though I'm new to this, I've already made some neat
        projects to show what I can do. I enjoy solving problems and making
        things look awesome on the web. I'm always eager to learn new things and
        grow as a developer. I'm excited about the chance to work on interesting
        projects and be part of the exciting world of web development!
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          {" "}
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>

        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero
