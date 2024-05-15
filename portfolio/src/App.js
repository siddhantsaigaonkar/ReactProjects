import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import About from './Components/About/About'
import Container from "react-bootstrap/Container";

import Skills from './Components/skills/Skills';
import Project from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      
        <Container className="container-box rounded">
 
            <Skills />
        
        </Container>
    
      <Project />
      <Contact/>
   
    </div>
  );
}

export default App
