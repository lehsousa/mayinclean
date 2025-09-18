// src/App.tsx

import Header from './components/Header/Header';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Health from './sections/Health/Health';
import Testimonials from './sections/Testimonials/Testimonials'; 
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import Beneficies from './sections/Beneficies/Beneficies';
import './App.css';

// 1. Importando o botão flutuante
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  // Número de telefone para o botão
  const phoneNumber = '5511990096260';

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Health />
       <Beneficies />
       <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* 2. Adicionando o botão flutuante ao site */}
      <WhatsAppButton phoneNumber={phoneNumber} />
    </div>
  );
}

export default App;