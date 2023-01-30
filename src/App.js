import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/portfolio/Work';
import Contact from './components/contact/Contact';

const App = () => {
  return (
   <>
   <Header/>
   
   <main className="main">
   <Home />
   <About />
   <Skills />
   <Services />
   <Qualification />
   <Work />
   <Contact />
   </main>
   
   </>
  );
}

export default App;
