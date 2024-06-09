// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Team from './components/Team';
import About from './components/About';
import Quote from './components/Quote';
import Footer from './components/Footer';
import './styles/styles.css';
import Gallery from './components/Gallery';

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
        <Gallery />
        <About />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}

export default App;

