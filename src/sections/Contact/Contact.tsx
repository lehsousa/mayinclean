// src/sections/Contact/Contact.tsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Limpeza de Sofá');
  
  // Substitua pelo número de WhatsApp da empresa com código do país
  const companyWhatsAppNumber = '5511949570997'; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
        alert('Por favor, preencha seu nome e telefone.');
        return;
    }

    const message = `Olá! Gostaria de um orçamento para ${service}. Meu nome é ${name} e meu telefone é ${phone}.`;
    const whatsappUrl = `https://wa.me/${companyWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Peça seu <span>orçamento</span></h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome completo" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone (WhatsApp)</label>
            <input 
              type="tel" 
              id="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(XX) XXXXX-XXXX" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Serviço Desejado</label>
            <select 
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option>Limpeza de Sofá</option>
              <option>Limpeza de Colchão</option>
              <option>Limpeza de Poltrona</option>
              <option>Limpeza de Tapetes</option> 
              <option>Limpeza de Bancos de Automóvel</option>
              <option>Impermeabilização</option>
              
            </select>
          </div>
          <button type="submit" className="submit-button">
            Solicitar Orçamento no WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;