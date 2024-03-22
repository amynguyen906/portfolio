import React from 'react';

export default function Navbar() {

  const resumeUrl = 'https://drive.google.com/file/d/1-Zii2eydM42JzHAXzLeR4XRVdmf8udUS/view?usp=sharing';

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


    return(
        <div className="navbar fixed z-50 bg-base-100 border-b border-base300 border-solid border-1 px-36">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>

    </div>
    <a className="btn btn-ghost text-xl">Amy Nguyen</a>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
  <li><button className="btn btn-ghost" onClick={() => scrollToSection('about')}>About</button></li>
  <li><button className="btn btn-ghost" onClick={() => scrollToSection('technology')}>Technology</button></li>
  <li><button className="btn btn-ghost" onClick={() => scrollToSection('projects')}>Projects</button></li>
  <li><button className="btn btn-ghost" onClick={() => scrollToSection('contact')}>Contact</button></li>
</ul>

  </div>
  <div className="navbar-end">
  <a className="btn btn-xs sm:btn-sm md:btn-md bg-accent" onClick={() => window.open('https://drive.google.com/file/d/1-Zii2eydM42JzHAXzLeR4XRVdmf8udUS/view?usp=sharing', '_blank')}>
    Resume</a>

  </div>
</div>


    );



}