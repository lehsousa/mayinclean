import { FaInstagram, FaFacebook, FaCcVisa, FaCcMastercard, FaTiktok } from 'react-icons/fa'; // 1. IMPORTE O ÍCONE AQUI

import { SiPix } from 'react-icons/si';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">

        {/* Coluna 1: Logo e Slogan */}
        <div className="footer-info">
          <a href='#home'>
          <img src="/assets/logoazul.jpg" alt="Mayin Clean" className="footer-logo" />
          </a>
          <p>Higienização de Estofados | Impermeabilização</p>
        </div>

        {/* Coluna 2: Formas de Pagamento */}
        <div className="footer-payment">
          <h4>Formas de Pagamento</h4>
          <div className="payment-icons">
            <SiPix title="Pix" />
            <FaCcVisa title="Visa" />
            <FaCcMastercard title="Mastercard" />
            <img src="/assets/elo-card-icon.svg" alt="Elo" title="Elo"  style={{ width: '1.5em', height: '1.5em', filter: 'brightness(0) invert(1)' }}  />
          </div>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div className="footer-social">
          <h4>Siga-nos</h4>
          <div className="social-icons">
            <a href="https://instagram.com/mayincleanoficial" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com/profile.php?id=61569882236356" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            {/* 2. ADICIONE O LINK E O ÍCONE DO TIKTOK AQUI */}
            <a href="https://tiktok.com/@mayincleanoficial" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mayin Clean. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;