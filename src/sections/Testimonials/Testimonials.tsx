import { FaStar, FaGoogle } from 'react-icons/fa';
import './Testimonials.css'; // Importa o ficheiro de estilos

// Depoimentos reais selecionados da sua página do Google
const testimonialsData = [
  {
    name: "David Gabriel",
    rating: 5,
    comment: "São excelentes profissionais, tanto teoricamente falando, quanto na prática, possuem muito conhecimento, de fato sabem o que estão fazendo. Me impressionaram muito por terem um bom relacionamento pessoal também.",
  },
  {
    name: "Emelly Marques",
    rating: 5,
    comment: "Empresa sensacional, produtos bons e profissionais e atendentes atenciosos pontuais e responsáveis!! Melhor empresa de higienização de estofados!!",
  },
  {
    name: "Lucas Rodrigues",
    rating: 5,
    comment: "Ótima, serviço de qualidade ! Muito atenciosos e prestativos, recomendo muito",
  },
];

// Pequeno componente para renderizar as estrelas
const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar key={i} className={i < rating ? 'star-filled' : 'star-empty'} />
    );
  }
  return <div className="star-rating">{stars}</div>;
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">
            O que nossos <span className="highlight">Clientes Dizem</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="card-header">
                <div className="user-icon">
                  <span>{testimonial.name.charAt(0)}</span>
                </div>
                <div className="user-info">
                  <h4>{testimonial.name}</h4>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              <p className="comment">"{testimonial.comment}"</p>
              <div className="card-footer">
                <FaGoogle />
                <span>Depoimento do Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
