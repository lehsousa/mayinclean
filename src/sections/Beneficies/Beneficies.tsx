// src/sections/Beneficies/Beneficies.tsx

import { FaAirFreshener} from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { GiVacuumCleaner } from 'react-icons/gi';
import './Beneficies.css';


const Beneficies = () => {
  return (
    <section id="beneficies" className="beneficies-section">
      <div className="container">
        <h2 className="section-title"><span>Benefícios</span> da Higienização</h2>
        <div className="beneficies-content">
          <div className="beneficies-card">
            
            <GiVacuumCleaner className="beneficies-icon" />
            <h3>Remoção Profunda de Manchas e Sujidade</h3>
            <p>
              Manchas de bebidas, comida ou o uso diário podem deixar os seus estofados com um aspecto cansado e sujo. A nossa limpeza profissional utiliza técnicas e produtos específicos que penetram nas fibras do tecido, removendo eficazmente a sujidade acumulada e até as manchas mais difíceis, devolvendo a aparência de novo ao seu móvel. <br/><br/>
            </p>
            <img src="/assets/beneficie1.jpeg" alt="" />
          </div>
          <div className="beneficies-card">
            <FaAirFreshener className="beneficies-icon" />
            <h3>Renovação Visual e Eliminação de Odores</h3>
            <p>
           Com o tempo, os estofados absorvem odores de animais, fumo ou humidade, comprometendo o conforto do ambiente. O nosso processo de higienização não só revitaliza as cores e a textura do tecido, melhorando drasticamente o aspeto visual do seu móvel, como também neutraliza e elimina os maus odores na sua origem, deixando um aroma fresco e agradável.
            </p>
             <img src="/assets/beneficie2.jpeg" alt="" />
          </div>
           <div className="beneficies-card">
            <MdOutlineHealthAndSafety className="beneficies-icon" />
           
            <h3>Mais Saúde para a Sua Família</h3>
            <p>
              Os estofados são um terreno fértil para ácaros, bactérias e fungos, agentes invisíveis que são dos principais causadores de alergias e doenças respiratórias como rinite e asma. A nossa limpeza profunda elimina estes microrganismos, purificando o ambiente e ajudando a prevenir e a amenizar os sintomas alérgicos, garantindo um lar mais saudável para si e para a sua família.
            </p>
             <img src="/assets/beneficie3.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficies;