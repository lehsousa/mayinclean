// src/sections/Health/Health.tsx

import { FaExclamationTriangle, FaLungsVirus, FaShieldVirus } from 'react-icons/fa';
import './Health.css';

const Health = () => {
  return (
    <section id="health" className="health-section">
      <div className="container">
        <h2 className="section-title"><span>Sua saúde</span> em primeiro lugar</h2>
        <div className="health-content">
          <div className="health-card">
            <FaExclamationTriangle className="health-icon" />
            <h3>O Perigo Invisível nos Estofados</h3>
            <p>
              Estofados acumulam poeira, pele morta, suor e restos de alimentos, criando o ambiente perfeito para a proliferação de ácaros, fungos e bactérias. Mesmo com a limpeza caseira, esses micro-organismos permanecem nas camadas mais profundas do tecido.
            </p>
          </div>
          <div className="health-card">
            <FaLungsVirus className="health-icon" />
            <h3>Doenças Causadas por Ácaros</h3>
            <p>
              Os ácaros são os principais causadores de alergias respiratórias. A exposição contínua pode desencadear ou agravar condições como rinite, asma, sinusite e dermatites, afetando a qualidade de vida de toda a família, especialmente crianças e idosos.
            </p>
          </div>
           <div className="health-card">
            <FaShieldVirus className="health-icon" />
            <h3>Nossa Solução para seu Bem-Estar</h3>
            <p>
              A higienização profissional da Mayin Clean utiliza equipamentos de extração profunda e produtos acaricidas que eliminam até 99% desses agentes nocivos. O resultado é um ambiente verdadeiramente limpo, saudável e livre de ameaças à sua saúde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Health;