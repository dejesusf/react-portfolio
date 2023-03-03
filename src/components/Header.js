import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div>
        <h1>FELICLARE DE JESUS</h1>
      </div>
      
      <nav>
        <a href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
          Home
        </a>
        <a href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
          About
        </a>
        <a href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </a>
        <a href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </a>
        <a href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
