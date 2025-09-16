import { FaCouch, FaBed, FaChair, FaCar, FaShieldAlt } from 'react-icons/fa';
import { LuFootprints } from 'react-icons/lu';
import './Services.css'; // O CSS foi totalmente refeito

// A lista de serviços permanece a mesma
const servicesData = [
  { 
    icon: <FaCouch />, 
    name: "Limpeza de Sofá", 
    description: "Removemos sujeiras, manchas e odores, renovando seu estofado.",
    media: "/assets/limpezadesofa.jpeg"
  },
  { 
    icon: <FaBed />, 
    name: "Limpeza de Colchões", 
    description: "Durma tranquilo em um colchão livre de ácaros e bactérias.",
    media: "/assets/limpezadecolchao.png"
  },
  { 
    icon: <FaChair />, 
    name: "Limpeza de Poltronas",
    description: "Sua poltrona favorita com cara de nova, livre de poeira.",
    media: "/assets/limpezadepoltrona.jpeg"
  },
  { 
    icon: <FaCar />, 
    name: "Bancos de Automóveis",
    description: "Valorize seu veículo com bancos limpos e higienizados.",
    media: "/assets/limpezadebanco.jpg"
  },
  { 
    icon: <LuFootprints />, 
    name: "Limpeza de Tapetes",
    description: "Renove seus tapetes e deixe-os como novos.",
    media: "/assets/limpezadetapete.png"
  },
  { 
    icon: <FaShieldAlt />, 
    name: "Blindagem de Estofados", // Nome ajustado para clareza
    description: "Proteja seus estofados contra líquidos e manchas.",
    media: "/assets/impermeabilizacao.mp4"
  }
];

// Componente de mídia ajustado para aceitar uma className
const MediaComponent = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const isVideo = src.endsWith('.mp4');

  if (isVideo) {
    return (
      <video 
        className={className}
        src={src}
        autoPlay
        loop
        muted
        playsInline
      >
        Seu navegador não suporta vídeos.
      </video>
    );
  }

  return <img src={src} className={className} alt={alt} />;
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">
          Nossos <span className="highlight">Serviços</span>
        </h2>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <MediaComponent src={service.media} alt={service.name} className="service-card-media" />
              <div className="service-card-content">
                <div className="service-card-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;