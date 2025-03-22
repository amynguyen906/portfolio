import React from 'react';

export default function Navbar() {
  const resumeUrl = 'https://drive.google.com/file/d/1SW9hRil1hZhz0Uq3WIA4dHx4l6UuqVB7/view?usp=sharing';

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="navbar fixed z-50 bg-base-100 border-b border-base-300 px-4 sm:px-10 lg:px-36 animate__animated animate__slideInDown">

      {/* Start: Brand & Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Hamburger Icon */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden focus:ring-2 focus:ring-accent active:ring-accent">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><button className="active:bg-accent" onClick={() => scrollToSection('about')}>About</button></li>
            <li><button className="active:bg-accent" onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button className="active:bg-accent" onClick={() => scrollToSection('technology')}>Technology</button></li>
            <li><button className="active:bg-accent" onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button className="active:bg-accent" onClick={() => scrollToSection('contact')}>Contact</button></li>
            <li>
              <a onClick={() => window.open(resumeUrl, '_blank', 'noopener,noreferrer')}>
                View Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Brand */}
        <a
          className="btn btn-ghost text-xl cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Amy Nguyen
        </a>
      </div>

      {/* Center: Desktop Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><button className="btn btn-ghost" onClick={() => scrollToSection('about')}>About</button></li>
          <li><button className="btn btn-ghost" onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button className="btn btn-ghost" onClick={() => scrollToSection('technology')}>Technology</button></li>
          <li><button className="btn btn-ghost" onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button className="btn btn-ghost" onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>

      {/* End: Resume (Large Screens Only) */}
      <div className="navbar-end hidden lg:inline-flex">
        <a
          className="btn btn-accent btn-sm bg-accent"
          onClick={() => window.open(resumeUrl, '_blank', 'noopener,noreferrer')}
        >
          Resume
        </a>
      </div>
    </div>
  );
}

