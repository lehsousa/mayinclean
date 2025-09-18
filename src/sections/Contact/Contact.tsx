// src/sections/Contact/Contact.tsx

import './Contact.css';

const Contact = () => {
  // Substitua pelo número de WhatsApp da empresa com código do país
  const companyWhatsAppNumber = '5511990096260'; 

  const handleWhatsAppClick = () => {
    const message = 'Olá! Quero fazer um orçamento.';
    const whatsappUrl = `https://wa.me/${companyWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Peça seu <span>orçamento</span></h2>
        <p className="contact-subtitle">Clique no botão abaixo para falar conosco diretamente no WhatsApp!</p>
        
        {/* Adicionamos um container para centralizar o botão */}
        <div className="cta-container">
          <button onClick={handleWhatsAppClick} className="submit-button">
            Solicitar Orçamento no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;