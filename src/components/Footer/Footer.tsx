// src/components/Footer/Footer.tsx

import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-info">
            <img src="/assets/logoazul.jpg" alt="Mayin Clean" className="footer-logo" />
            <p>Higienização de Estofados | Impermeabilização</p>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com/mayincleanoficial" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com/profile.php?id=61569882236356" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
         {/* <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>*/}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mayin Clean. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;