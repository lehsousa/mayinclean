// src/components/Header/Header.tsx
import  { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#home" className="nav-logo">
          <img src="/assets/logobranco.jpg" alt="Mayin Clean Logo" />
        </a>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>Sobre</a>
          <a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Serviços</a>
          <a href="#health" className="nav-link" onClick={() => setIsOpen(false)}>Saúde</a>
           <a href="#beneficies" className="nav-link" onClick={() => setIsOpen(false)}>Benefícios</a>
          <a href="#contact" className="nav-link cta-button" onClick={() => setIsOpen(false)}>Orçamento</a>
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;