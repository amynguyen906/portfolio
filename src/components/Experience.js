import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function About() { 

    const experiences = [
        {
            company: 'University of Georgia',
            role: 'Undergraduate Teaching Assistant',
            date: 'Febuary 2024 - May 2024',
            description: '',
            tools: ['ReactJS', 'Java', 'Springboot', 'MySQL'],
        },
        {
            company: 'Friends For a Nonviolent World',
            role: 'Web Development Assistant',
            date: 'April 2024 - Present',
            description: '',
            tools: ['ReactJS', 'Java', 'Springboot', 'MySQL'],
        },
        {
            company: 'Gwinnett County Government',
            role: 'Operational Excellence Intern',
            date: 'May 2024 - June 2024',
            description: '',
            tools: ['ReactJS', 'Java', 'Springboot', 'MySQL'],
        },
    ]

    return (
        <div className="bg-base-100 about py-20 text-center " id="experience">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <h1 className="text-5xl font-semibold p-2 my-10 rounded-lg inline-block bg-accent">
            Experience
        </h1>
      
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-10 md:pl-36 md:pr-36">

        <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end md:mb-10 md:text-start">
      <time className="font-mono italic ">Febuary 2024 - Present</time>
      <div className="text-lg font-black">Undergraduate Teaching Assistant</div>
      <div className="text-lg  italic">University of Georgia</div>
      <hr></hr>
      <div className="mb-10 md:text-start space-y-4">
      <p>• Works closely with professor and 3 UTAs to grade weekly labs and assignments for 200+ students, ensuring consistency and accuracy in C and Unix systems programming evaluations</p>
  <p>• Provides tailored feedback for 60+ students, enhancing comprehension of C and Unix programming concepts and improving assignment performance</p>
  </div>
    </div>
    <hr />
  </li>


  <li>
    <div className="timeline-middle =">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">April 2024 - September 2024</time>
      <div className="text-lg font-black">Web Development Assistant</div>
      <div className="text-lg  italic">Friends for a Nonviolent World</div>
      <hr></hr>
      <div className="mb-10 md:text-start space-y-4">
  <p>• Designed and enhanced 8+ pages using HTML and CSS to showcase upcoming events, programs, and volunteer opportunities</p>
  <p>• Recommended and implemented strategic recommendations with the Executive Director, optimizing website navigation for 25+ daily visitors</p>
  <p>• Managed and updated 20+ dynamic and responsive web pages on AveNET, enhancing accessibility and user experience</p>
</div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end md:mb-10 md:text-start">
      <time className="font-mono italic ">May 2024 - June 2024</time>
      <div className="text-lg font-black">Operational Excellence Intern</div>
      <div className="text-lg  italic">Gwinnett County Government</div>
      <hr></hr>
      <div className="mb-10 md:text-start space-y-4">
      <p>• Collaborated with 11+ OPA (Operational Performance Assessment) category members from Technology and Performance teams in meetings and collaborative tasks to ensure project progress</p>
  <p>• Leveraged Excel and Power BI to generate a responsive report on state and county data, uncovering key insights and trends</p>
  <p>• Optimized workflows using Power Automate to enhance efficiency by 20%</p>
  <p>• Analyzed IT governance practices of municipalities and presented findings to enhance existing processes</p>
  </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">September 2024 - December 2024 </time>
      <div className="text-lg font-black">Operational Analysis Intern</div>
      <div className="text-lg  italic">Athens-Clarke County Unified Government</div>
      <hr></hr>
      <div className="mb-10 md:text-start space-y-4">
      <p>• Developed and managed a database of 300+ audit documents and records by analyzing and cleaning data, streamlining access and reference for Internal Auditor</p>
  <p>• Created 10+ visually engaging graphics in Canva to emphasize key insights in audit report </p>
  <p>• Assisted Management Analysts with audit documentation and organizing monthly meetings</p>
      </div>
    </div>
    <hr />
  </li>
  



</ul>

        
        
        
        
        
        
        
        
        
        
        {/* {experiences.map((experience, index) => (
        <div>
        <h2>{experience.company}</h2>
        <h2>{experience.role}</h2>
        <h2>{experience.date}</h2>
        <h2>{experience.description}</h2>
        </div>
      ))} */}
      </AnimationOnScroll>
        </div>
    );
}