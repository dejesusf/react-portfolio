import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Home from './pages/Home';


export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    } if (currentPage === 'Contact') {
      return <Contact />;
    } if (currentPage === 'Portfolio') {
      return <Portfolio />;
    } if (currentPage === 'About') {
      return <About />
    } 
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}