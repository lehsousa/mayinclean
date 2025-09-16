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

function App() {
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
    </div>
  );
}

export default App;