import './App.css';
import React from 'react';
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Technology from './components/Technology.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
   <div>
    <Navbar />
    <Hero />
    <About />
    <Technology />
    <Projects />
    <Contact />
    <Footer />
   </div>
    
  );
}

export default App;
