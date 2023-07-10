import React from 'react';
import "./style.css";

// Destructuring variables from the props object
function Nav(props) {
  const { currentPage, handlePageChange } = props
  return (
    <ul className="nav nav-tabs d-flex justify-content-around">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Ternary operator checks if the current page is "About" set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
                   // Ternary operator checks if the current page is "Portfolio" set the current page to 'nav-link-active', otherwise we set it to 'nav-link'

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Ternary operator checks if the current page is "Contact" set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Ternary operator checks if the current page is "Resume" set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Nav;
