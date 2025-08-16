// src/sections/About/About.tsx

import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Sobre a <span>Mayin Clean</span></h2>
        <div className="about-content">
          <p>
            Somos uma empresa especializada em trazer vida nova para seus estofados. Na Mayin Clean, combinamos tecnologia de ponta, produtos biodegradáveis e uma equipe apaixonada pelo que faz para oferecer um serviço de higienização e impermeabilização que vai além da estética: é uma questão de saúde e bem-estar.
          </p>
          <p>
            Nossa missão é eliminar ácaros, bactérias e sujeiras invisíveis, garantindo um ambiente mais seguro e confortável para você e sua família. Cada serviço é realizado com máximo cuidado e atenção aos detalhes, porque a sua satisfação é a nossa maior prioridade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;