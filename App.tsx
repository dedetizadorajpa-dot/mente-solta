
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Store from './components/Store';
import MusicSection from './components/MusicSection';
import Schedule from './components/Schedule';
import Integrations from './components/Integrations';
import CommunityMural from './components/CommunityMural';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative selection:bg-[#FF5722] selection:text-white overflow-x-hidden">
      <CustomCursor />
      
      {/* Dynamic Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        scrolled ? 'glass py-3 border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            {/* Logo container: Orange/Yellow square with the Poly-Head logo */}
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform overflow-hidden p-1.5">
              <img 
                src="https://raw.githubusercontent.com/ai-gen-images/assets/main/mente-solta-head-logo.png" 
                alt="Logo Mente Solta" 
                className="w-full h-full object-contain brightness-0 invert"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <div className="flex flex-col">
               <span className="text-xl font-black tracking-tighter leading-none">MENTE SOLTA</span>
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">O Retorno</span>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-10 text-xs font-black uppercase tracking-widest">
            <a href="#about" className="hover:text-[#FF5722] transition-colors">História</a>
            <a href="#members" className="hover:text-[#FF5722] transition-colors">Integrantes</a>
            <a href="#store" className="hover:text-[#FF5722] transition-colors">Loja</a>
            <a href="#music" className="hover:text-[#FF5722] transition-colors">Música</a>
            <a href="#schedule" className="hover:text-[#FF5722] transition-colors">Agenda</a>
            <a href="#integrations" className="hover:text-[#FF5722] transition-colors text-[#FF5722]">Digital</a>
            <a href="#community" className="hover:text-[#FF5722] transition-colors">Fãs</a>
            <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full hover:bg-[#FF5722] hover:text-white transition-all">Booking</a>
          </div>
          
          <button className="lg:hidden text-white">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-4 h-0.5 bg-white ml-auto"></div>
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Members />
        <Store />
        <MusicSection />
        <Schedule />
        <Integrations />
        <CommunityMural />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
