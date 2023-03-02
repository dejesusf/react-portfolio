import React from 'react';

export default function Portfolio() {
  return (
    <main>
      <div className="row">
        <div className="column">
          <div className="top">
            <h1>PORTFOLIO</h1>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="column">
          <div className="middle g1-block">
            <div className="small-left" id="image">
              <a href=""><img src="" /></a>
            </div>

            <div className="large-right">
              <h2>PROJECT NAME</h2>
              <p>Hi! Welcome to my porfolio that was built using React! Please navigate using the links above to learn About Me and to see my Portfolio. If you like what you see, feel free to contact me via the Contact page.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}