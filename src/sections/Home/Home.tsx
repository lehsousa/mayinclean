import './Home.css';

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
          <h1>Sua casa limpa, <span>sua família protegida.</span></h1>
          <p>Devolvemos a aparência de novo e o bem-estar ao seu ambiente com a mais completa higienização de estofados.</p>
          <a href="#contact" className="home-cta">Solicite um Orçamento Agora</a>
        </div>
        <div className="home-image">
           <img src="/assets/logoverdetransparente.png" alt="Mayin Clean Logo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
