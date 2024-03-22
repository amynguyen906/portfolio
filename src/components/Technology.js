import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJava, 
  faHtml5, 
  faCss3, 
  faJs, 
  faNodeJs, 
  faReact,
  faGit,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { SpeechBubble } from 'react-kawaii';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Technology() {

  const languages = [
    { name: "Java", icon: faJava },
    { name: "C", icon: faJava },
    { name: "C++", icon: faJava },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
  ];
  
  const frontend = [
    { name: "React.js", icon: faReact },
    // Replace the following with the correct icons
    { name: "DaisyUI", icon: faReact }, 
  ];
  
  const backend = [
    { name: "Node.js", icon: faNodeJs },
    { name: "Express.js", icon: faNodeJs}, 
    { name: "MongoDB", icon: faNodeJs }, 
  ];
  
  const tools = [
    { name: "Git", icon: faGit }, 
  ];

  return (
    <div className="bg-base-100 about py-20 px-36 justify-center text-center items-center" id='technology'>
      {/* Title */}
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <h1 className="text-5xl font-semibold p-2 my-10 rounded-lg inline-block bg-accent">Technologies</h1>
      </AnimationOnScroll>

      {/* Two columns layout */}
      <div className='grid grid-cols-2'>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div>
        <h2 className='text-left text-2xl font-semibold pb-1 pt-2'>Languages</h2>
        <div className="grid gap-2 grid-cols-3">
          {languages.map((tech, index) => (
            <div key={index} className="flex items-center justify-left p-4 bg-base-300 rounded-lg inline-block">
              <FontAwesomeIcon icon={tech.icon} size="xl" className="text-primary-content" />
              <p className="ml-3 text-primary-content">{tech.name}</p>
            </div>
          ))} 
        </div>

        <h2 className='text-left text-2xl font-semibold pb-1 pt-2'>Frontend</h2>
        <div className="grid gap-2 grid-cols-3">
          {frontend.map((tech, index) => (
            <div key={index} className="flex items-center justify-left p-4 bg-base-300 rounded-lg inline-block">
              <FontAwesomeIcon icon={tech.icon} size="xl" className="text-primary-content" />
              <p className="ml-3 text-primary-content">{tech.name}</p>
            </div>
          ))}
        </div>

        <h2 className='text-left text-2xl font-semibold pb-1 pt-2'>Backend</h2>
        <div className="grid gap-2 grid-cols-3">
          {backend.map((tech, index) => (
            <div key={index} className="flex items-center justify-left p-4 bg-base-300 rounded-lg inline-block">
              <FontAwesomeIcon icon={tech.icon} size="xl" className="text-primary-content" />
              <p className="ml-3 text-primary-content">{tech.name}</p>
            </div>
          ))}
        </div>

        <h2 className='text-left text-2xl font-semibold pb-1 pt-2'>Tools</h2>
        <div className="grid gap-2 grid-cols-3">
          {tools.map((tech, index) => (
            <div key={index} className="flex items-center justify-left p-4 bg-base-300 rounded-lg inline-block">
              <FontAwesomeIcon icon={tech.icon} size="xl" className="text-primary-content" />
              <p className="ml-3 text-primary-content">{tech.name}</p>
            </div>
          ))}
        </div>
        </div>
        </AnimationOnScroll>
        <div>

        </div>
      </div>
      </div>
  );
}
