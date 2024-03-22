import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Hero() { 

  const resumeUrl = 'https://drive.google.com/file/d/1-Zii2eydM42JzHAXzLeR4XRVdmf8udUS/view?usp=sharing';

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

    return (
      <div className="hero min-h-screen" style={{backgroundImage: ''}}>
        <div className="bg-base-100 hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-accent-content">
          
            <div className="max-w-lg animate__animated animate__slideInUp">
              <h1 className="mb-5 text-5xl font-bold">👩‍💻</h1>
              <h1 className="mb-5 text-4xl font-bold">
                — Hi! I'm Amy,{' '}
              </h1>
                <div className="mb-5 text-4xl font-bold">
          
          {/*
          <TypeAnimation
            sequence={[
              "a Computer Science student,",
              1000,
              "a",
              1000,
              "b",
              1000,
            ]}
            speed={{type: 'keyStrokeDelayInMs', value: 80}}
            repeat={Infinity}
          />
          */}
              <h1 className="mb-5 mt-5 text-4xl font-bold mb-5">
                a Computer Science student,
              </h1>
              <h1 className="mb-5 mt-5 text-4xl font-bold mb-5">
                based in Athens, GA.
              </h1>
            </div>

            <button className="btn btn-accent mt-5" onClick={() => scrollToSection('about')}>
              About Me
            </button>
          </div>
         
        </div>
      </div>
    );

}