import './Home.css';

  const phoneNumber = '5511990096260';
  const message = "Olá vim pelo google e gostaria de um orçamento.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

const Home = () => {
  return (
    <section id="home" className="home-section">
      {/* Elemento de vídeo para o fundo */}
      <video 
        id="video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline // Essencial para autoplay em telemóveis
      >
        <source src="/assets/background-video.mp4" type="video/mp4" />
        O seu navegador não suporta a tag de vídeo.
      </video>

      {/* Overlay para escurecer o vídeo e melhorar a legibilidade do texto */}
      <div className="video-overlay"></div>

      {/* Conteúdo da seção que ficará sobre o vídeo */}
      <div className="home-content container">
        <div className="home-text">
          
          <h1>"Porque cuidar de estofados, <span>é cuidar de vidas"</span></h1>
          <p>Devolvemos a aparência de novo e o bem-estar ao seu ambiente com a mais completa higienização de estofados.</p>
          <a 
        href={whatsappUrl} 
        className="home-cta"
        target="_blank" // Abre em uma nova aba
        rel="noopener noreferrer" // Boas práticas de segurança
      >
        Solicite um Orçamento Agora
      </a>
        </div>
        <div className="home-image">
           <img src="/assets/logoverdetransparente.png" alt="Mayin Clean Logo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
