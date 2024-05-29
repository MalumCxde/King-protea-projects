// App.js
import React from 'react';
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
  return (
    <div className="App">
      <Header />
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
