import React from 'react';
import './header.css'; // Importing the separate CSS file

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Dhruvi's Dessert Gallery</h1>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"></link>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">About</a></li>
          <li className="nav-item"><a href="#">Services</a></li>
          <li className="nav-item"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
