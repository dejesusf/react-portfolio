import React from 'react';

export default function About() {
  return (
    <main>
      <div className="row">
        <div className="column">
          <div className="top">
            <h1>ABOUT ME</h1>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="column">
          <div className="middle">
            <div className="small-left" id="image">
              <img src="/images/profile.jpeg" alt="Feliclare sitting on the WSU Cougar statue" />
            </div>

            <div className="large-right" id="about-me">
              <p>My name is Feliclare De Jesus and I am a Student Full Stack Web Developer enrolled in the University of Washington Coding Bootcamp program. Also, you may call me Feli (it's like Kelly, but with an F).</p>

              <p>I was born and raised in Hawai'i, on the busy island of O'ahu. I miss going to the beach and just soaking in the sun and salty air on my days off. Nowadays, I lounge with my dogs, Miso and Yuri, streaming a show on Netflix and crocheting. I am a huge fan of Pokemon and have been since 1998!</p>

              <p>I recently moved to Washington in March 2020--right before quarantine. I've been employed with the University of Washington's Department of Laboratory Medicine & Pathology since 2020. My work as a Clinical Laboratory Technician has been fulfilling but I am looking for change!</p>

              <p>Please checkout my <a href="./pages/portfolio.html">portfolio</a> and <a href="./pages/current-projects.html">ongoing projects</a> to see what I'm currently working on. You can also follow me on <a href="https://github.com/dejesusf" target="_blank" rel="noopener noreferrer">Github</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}