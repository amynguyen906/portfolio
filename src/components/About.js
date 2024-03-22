import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './../App.css';
import {Cat} from 'react-kawaii';

export default function About() { 

return (
    <div className="bg-base-100 about py-20 text-center " id="about">
      <h1 className="text-5xl font-semibold p-2 my-10 rounded-lg inline-block bg-accent">
        About Me
      </h1>
      
      <div className="columns-2  gap-8 flex-col lg:flex-row-reverse ">
        
      <div class="justify-center pl-36 pr-12 pb-10 pt-5">
  <div class="text-left">
    <p class="mb-8">
      Hello! I'm Amy and I'm a 3rd year Computer Science major at UGA with an interest in full-stack development. 
    </p>
    <p class="mb-8">
    I enjoy creating applications that are both user-friendly and aesthetically pleasing.
    </p>
    <p class="mb-8">
      Currently, the technologies I'm working with are React, Java, and Springboot!
    </p>
    <div class="flex justify-center">
    <button className="btn btn-accent mt-5" onClick={() => window.open('https://drive.google.com/file/d/1-Zii2eydM42JzHAXzLeR4XRVdmf8udUS/view?usp=sharing', '_blank')}>
      Resume
    </button>

    </div>
  </div>
</div>

    
  
  <div className="mockup-code rounded-tr-none rounded-br-none bg-base-300 text-left text-accent-content ps-10 pb-5 pe-10 w-auto"> 
  <pre data-prefix="$"><code>./aboutMe.out</code></pre> 
  <br />
  <pre className=""><code>Name: Amy Nguyen</code></pre>
  <br />
  <pre className=""><code>Age: 21</code></pre>
  <br />
  <pre className=""><code>School: University of Georgia</code></pre>
  <br />
  <pre className=""><code>Hometown: Lilburn, GA</code></pre>

  
</div>
          
    <div>
      
      
      
    </div>
  </div>
</div>
);
}