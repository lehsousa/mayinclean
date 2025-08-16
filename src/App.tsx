// src/App.tsx

import Header from './components/Header/Header';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Health from './sections/Health/Health';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import Beneficies from './sections/Beneficies/Beneficies';

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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;