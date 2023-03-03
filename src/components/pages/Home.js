import React from 'react';

export default function Home() {
  return (
    <main>
      <div className="row">
        <div className="column">
          <div className="top">
            <img src="/images/miso.jpeg" />
            <img src="/images/yuri.jpeg" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="middle">
            <p className="center">Welcome to my portfolio that was built using React! Please navigate using the links above or visit my socials below.</p>
          </div>
        </div>
      </div>
    </main>
  );
}