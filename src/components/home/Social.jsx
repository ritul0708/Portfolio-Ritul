import React from 'react';
import './home.css';

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/ritul0708/" 
        className="home__social-icon" target="_blank">
        <i className="uil uil-linkedin"></i>
      </a>

      <a href="https://github.com/ritul0708" 
        className="home__social-icon" target="_blank">
        <i className="uil uil-github-alt"></i>
      </a>

      <a href="https://www.instagram.com/rituljain0708/" 
        className="home__social-icon" target="_blank">
      < i className="uil uil-instagram"></i>
      </a>
    </div>
  )
}

export default Social