import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './../App.css';
import {Cat} from 'react-kawaii';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function About() { 

return (
    <div className="bg-base-100 about py-20 text-center " id="about">
      
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <h1 className="text-5xl font-semibold p-2 my-10 rounded-lg inline-block bg-accent">
        About Me
      </h1>
      </AnimationOnScroll>
      
      <div className="columns-2 pl-36 pr-36 gap-8 flex-col lg:flex-row-reverse ">
        
      <div class="justify-center pr-12 pb-10 pt-5">
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div class="text-left">
    <p class="m-8">
    I’m currently a 4th year student at UGA. I am passionate about data analytics and love working with data to find patterns and insights. 
   I have interned at Gwinnett County Government and Athens-Clarke County Unified Government, where I applied analytics to real-world problems.
    
     </p>
    <p class="m-8">
      I am always looking to learn, collaborate, and explore new opportunities, so feel free to connect!
    </p>
    <div class="flex justify-center">
    <button className="btn btn-accent m-5" onClick={() => window.open('https://drive.google.com/file/d/1SW9hRil1hZhz0Uq3WIA4dHx4l6UuqVB7/view?usp=sharing', '_blank')}>
      Resume
    </button>

    </div>
  </div>
  </AnimationOnScroll>
</div>

    
<AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true}>
  <div className="mockup-code  bg-base-300 text-left text-accent-content p-7 w-auto"> 
  <pre data-prefix="$" className='pl-0'><code>./aboutMe.out</code></pre> 
  <br />
  <pre className=""><code>Name: Amy Nguyen</code></pre>
  <br />
  <pre className=""><code>Background: Computer Science | Data Analytics</code></pre>
  <br />
  <pre className=""><code>School: University of Georgia</code></pre>
  <br />
  <pre className=""><code>Goal: Turning ideas into meaningful solutions.</code></pre>
</div>
</AnimationOnScroll>
          
    <div>
      
      
      
    </div>
  </div>
</div>
);
}