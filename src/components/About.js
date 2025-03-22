import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './../App.css';

export default function About() {
  return (
    <div className="bg-base-100 about py-20 text-center" id="about">
      {/* Title */}
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <h1 className="text-5xl font-semibold p-2 my-10 rounded-lg inline-block bg-accent">
          About Me
        </h1>
      </AnimationOnScroll>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row-reverse gap-8 px-10 lg:px-36 items-stretch">

        {/* Text Section */}
        <div className="flex-1 justify-center">
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <div className="text-left h-full flex flex-col justify-center">
              <p className="m-8 text-center text-sm md:text-md md:text-left">
                I’m currently a 4th year student at UGA. I am passionate about data analytics and love working with data to find patterns and insights. I have interned at Gwinnett County Government and Athens-Clarke County Unified Government, where I applied analytics to real-world problems.
              </p>
              <p className="m-8 text-center text-sm md:text-md md:text-left">
                I am always looking to learn, collaborate, and explore new opportunities, so feel free to connect!
              </p>
              <div className="flex justify-center">
                <button
                  className="btn btn-accent m-5"
                  onClick={() =>
                    window.open(
                      'https://drive.google.com/file/d/1SW9hRil1hZhz0Uq3WIA4dHx4l6UuqVB7/view?usp=sharing',
                      '_blank'
                    )
                  }
                >
                  Resume
                </button>
              </div>
            </div>
          </AnimationOnScroll>
        </div>

        {/* Code Window (Hidden on Small Screens) */}
        <div className="flex-1 hidden lg:block">
          <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
            <div className="mockup-code h-full bg-base-300 text-left text-accent-content p-7 w-full text-sm sm:text-base md:text-md">
              <pre data-prefix="$" className="pl-0">
                <code>./aboutMe.out</code>
              </pre>
              <br />
              <pre><code>Name: Amy Nguyen</code></pre>
              <br />
              <pre><code>Background: Computer Science | Data Analytics</code></pre>
              <br />
              <pre><code>School: University of Georgia</code></pre>
              <br />
              <pre><code>Goal: Turning ideas into meaningful solutions.</code></pre>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}
