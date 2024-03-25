import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Contact() {
    const githubLink = 'https://github.com/amynguyen906';
    const linkedinLink = 'https://www.linkedin.com/in/amynguyen906/';
    const email = 'an61833@uga.edu';

  return (
    <div className="bg-base-100 about py-20 px-36 flex flex-col items-center" id='contact'>
      {/* Title */}
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <h1 className="text-5xl font-semibold p-2 mb-10 rounded-lg inline-block bg-accent">
        Contact Me
      </h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <p className="text-2xl">Feel free to contact or connect with me! </p>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div className="flex flex-row items-center mt-10 space-x-8">
        {/* Email icon with tooltip */}
        <div className="tooltip tooltip-accent" data-tip="Email">
          <a href={`mailto:${email}`} target="_blank">
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
            </a>
        </div>
      
        {/* LinkedIn icon with tooltip */}
        <div className="tooltip tooltip-accent" data-tip="LinkedIn">
          <a href={linkedinLink} target="_blank"></a><FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
        </div>
       
     
        {/* GitHub icon with tooltip */}
        <div className="tooltip tooltip-accent" data-tip="GitHub">
          <a href={githubLink} target="_blank">
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </a>
        </div>
        
      </div>
      </AnimationOnScroll>
    </div>
  );
}
