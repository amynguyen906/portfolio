import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Contact() {
  const githubLink = 'https://github.com/amynguyen906';
  const linkedinLink = 'https://www.linkedin.com/in/amynguyen906/';
  const email = 'anguyen090602@gmail.com';

  return (
    <div
      id="contact"
      className="bg-base-100 about p-4 md:py-20 md:px-36 text-md md:text-2xl flex flex-col items-center"
    >
      {/* title */}
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <h1 className="text-5xl font-semibold p-2 mb-10 rounded-lg inline-block bg-accent text-center md:text-left">
          Contact Me
        </h1>
      </AnimationOnScroll>

      {/* Intro text */}
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <p className="text-md text-center md:text-left mb-10">
          Feel free to contact or connect with me!
        </p>
      </AnimationOnScroll>

      {/* contact Info */}
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <div className="space-y-4 text-sm sm:text-base text-black mb-5">
          {/* Email */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl " />
            <a
              href={`mailto:${email}`}
              className="hover:underline transition-all duration-150"
            >
              {email}
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FontAwesomeIcon icon={faGithub} className="text-xl " />
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all duration-150"
            >
              @amynguyen906
            </a>
          </div>

          {/* linkedIn */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl " />
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all duration-150"
            >
              @amynguyen906
            </a>
          </div>
        </div>
      </AnimationOnScroll>

      
     
    </div>
  );
}

