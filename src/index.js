import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Footer from './components/Footer';
import './index.css';

const main = document.getElementById('root');
const footerContainer = document.querySelector('footer');

createRoot(main).render(<App />);
createRoot(footerContainer).render(<Footer />);