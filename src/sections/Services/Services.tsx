import { FaCouch, FaBed, FaChair, FaCar, FaShieldAlt } from 'react-icons/fa';
import { LuFootprints } from 'react-icons/lu';
import './Services.css'; // Importa os estilos para a animação

// Lista dos serviços com os seus ficheiros de imagem/vídeo
const servicesData = [
  { 
    icon: <FaCouch />, 
    name: "Limpeza de Sofá", 
    description: "Removemos sujeiras, manchas e odores, renovando seu estofado.",
    backMedia: "/assets/limpezadesofa.jpeg"
  },
  { 
    icon: <FaBed />, 
    name: "Limpeza de Colchões", 
    description: "Durma tranquilo em um colchão livre de ácaros e bactérias.",
    backMedia: "/assets/limpezadecolchao.png"
  },
  { 
    icon: <FaChair />, 
    name: "Limpeza de Poltronas",
    description: "Sua poltrona favorita com cara de nova, livre de poeira.",
    backMedia: "/assets/limpezadepoltrona.jpeg"
  },
  { 
    icon: <FaCar />, 
    name: "Bancos de Automóveis",
    description: "Valorize seu veículo com bancos limpos e higienizados.",
    backMedia: "/assets/limpezadebanco.jpg"
  },
  { 
    icon: <LuFootprints />, 
    name: "Limpeza de Tapetes",
    description: "Renove seus tapetes e deixe-os como novos.",
    backMedia: "/assets/limpezadetapete.png" // Caminho para sua media
  },
  { 
    icon: <FaShieldAlt />, 
    name: "Impermeabilização",
    description: "Proteja seus estofados contra líquidos e manchas.",
    backMedia: "/assets/impermeabilizacao.mp4" // Caminho para o seu vídeo
  }
];

// Componente que renderiza a mídia (imagem ou vídeo) de forma inteligente
const MediaComponent = ({ src, alt }: { src: string; alt: string }) => {
  const isVideo = src.endsWith('.mp4');

  if (isVideo) {
    return (
      <video 
        className="w-full h-full object-cover rounded-lg"
        src={src}
        autoPlay
        loop
        muted
        playsInline // Essencial para autoplay em telemóveis
      >
        O seu navegador não suporta a tag de vídeo.
      </video>
    );
  }

  return <img src={src} className="w-full h-full object-cover rounded-lg" alt={alt} />;
};

const Services = () => {
  return (
    <section id="services" className="bg-light-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Nossos <span className="text-primary-green">Serviços</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Renderiza os 4 primeiros cards */}
          {servicesData.slice(0, 5).map((service, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="text-primary-green text-5xl mb-4 text-center" >{service.icon}</div>
                  <h3 className="text-2xl font-bold font-heading mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{service.description}</p>
                </div>
                <div className="flip-card-back">
                  <MediaComponent src={service.backMedia} alt={service.name} />
                </div>
              </div>
            </div>
          ))}
          
          {/* Card do Logo - posicionado no meio da segunda linha 
          <div className="bg-dark-blue rounded-lg shadow-lg flex flex-col justify-center items-center p-8 h-64">
             <img src="/assets/logoverde.jpg" alt="Mayin Clean Logo" className="max-h-40 w-auto rounded-lg" />
          </div>*/}

          {/* Renderiza o último card (Impermeabilização) */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="text-primary-green text-5xl mb-4">{servicesData[5].icon}</div>
                <h3 className="text-2xl font-bold font-heading mb-2">{servicesData[5].name}</h3>
                <p className="text-gray-600 text-sm text-center">{servicesData[5].description}</p>
              </div>
              <div className="flip-card-back">
                  <MediaComponent src={servicesData[4].backMedia} alt={servicesData[4].name} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
