// src/components/WhatsAppButton/WhatsAppButton.tsx

import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

interface Props {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message }: Props) => {
  // Mensagem padrão se nenhuma for fornecida
  const defaultMessage = "Olá vim pelo google e gostaria de um orçamento.";
  
  // Codifica a mensagem para ser usada na URL
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;