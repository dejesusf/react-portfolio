import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
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
      <a href="#Resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
        Resume
      </a>
      <a href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
        Contact
      </a>
    </header>
  );
}

export default NavTabs;
