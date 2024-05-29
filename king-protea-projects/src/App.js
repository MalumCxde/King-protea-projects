// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Quote from './components/Quote';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Header toggleDarkMode={toggleDarkMode} />
      <main>
        <Home />
        <Services />
        <Team />
        <Testimonials />
        <About />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}

export default App;

