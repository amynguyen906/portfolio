import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Technology() {
  const languages = [
    { name: "Java", icon: 'devicon-java-plain' },
    { name: "C", icon: 'devicon-c-plain' },
    { name: "C++", icon: 'devicon-cplusplus-plain' },
    { name: "HTML", icon: 'devicon-html5-plain' },
    { name: "CSS", icon: 'devicon-css3-plain' },
    { name: "JavaScript", icon: 'devicon-javascript-plain' },
    { name: "Python", icon: 'devicon-python-plain' },
  ];

  const frontend = [
    { name: "React.js", icon: 'devicon-react-original' },
    { name: "Tailwind CSS", icon: 'devicon-tailwindcss-original' },
  ];

  const backend = [
    { name: "Node.js", icon: 'devicon-nodejs-plain' },
    { name: "Express.js", icon: 'devicon-express-original' },
    { name: "MongoDB", icon: 'devicon-mongodb-plain' },
    { name: "Flask", icon: 'devicon-flask-original' },
  ];

  const tools = [
    { name: "Git", icon: 'devicon-git-plain' },
  ];

  return (
    <div className="bg-base-100 about p-2 md:py-20 md:px-36 justify-center text-center items-center" id="technology">
      {/* Title */}
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <h1 className="text-5xl font-semibold p-2 my-10 rounded-lg inline-block bg-accent">Technologies</h1>
      </AnimationOnScroll>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 mt-6">
        {/* Left Column */}
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div>
            <h2 className="text-left text-2xl font-semibold pb-1 pt-2">Languages</h2>
            <div className="grid gap-2 grid-cols-2 lg:grid-cols-3">
              {languages.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-base-300 rounded-lg w-full">
                  <i className={tech.icon} style={{ fontSize: '30px' }}></i>
                  <p className="text-primary-content text-sm sm:text-xs md:text-base break-words whitespace-normal">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-left text-2xl font-semibold pb-1 pt-4">Frontend</h2>
            <div className="grid gap-2 grid-cols-2 lg:grid-cols-3">
              {frontend.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-base-300 rounded-lg w-full">
                  <i className={tech.icon} style={{ fontSize: '30px' }}></i>
                  <p className="text-primary-content text-sm sm:text-xs md:text-base break-words whitespace-normal">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimationOnScroll>

        {/* Right Column */}
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div>
            <h2 className="text-left text-2xl font-semibold pb-1 pt-2">Backend</h2>
            <div className="grid gap-2 grid-cols-2 lg:grid-cols-3">
              {backend.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-base-300 rounded-lg w-full">
                  <i className={tech.icon} style={{ fontSize: '30px' }}></i>
                  <p className="text-primary-content text-sm sm:text-xs md:text-base break-words whitespace-normal">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-left text-2xl font-semibold pb-1 pt-4">Tools</h2>
            <div className="grid gap-2 grid-cols-2 lg:grid-cols-3">
              {tools.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-base-300 rounded-lg w-full">
                  <i className={tech.icon} style={{ fontSize: '30px' }}></i>
                  <p className="text-primary-content text-sm sm:text-xs md:text-base break-words whitespace-normal">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

