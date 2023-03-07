import React from 'react';
import Image from '../images/index';

export default function Home() {
  return (
    <main>
      <div className="row">
        <div className="column">
          <div className="top">
            <img src={Image[2]} alt="Miso sleeping on a pillow"/>
            <img src={Image[7]} alt="Yuri laying down on a bed"/>
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