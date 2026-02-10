
import React from 'react';
import { Calendar, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-4 overflow-hidden bg-ms-gradient">
      {/* Abstract Background Elements inspired by the logo's squares */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/10"
            style={{
              width: Math.random() * 40 + 10 + 'px',
              height: Math.random() * 40 + 10 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${Math.random() * 5 + 5}s infinite ease-in-out ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl text-center z-10 space-y-8">
        <div className="flex justify-center mb-4">
          <div className="relative w-48 h-48 md:w-64 md:h-64 animate-float">
             {/* Representing the logo provided in the image prompt */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-full blur-3xl opacity-30 animate-pulse"></div>
             <img 
               src="https://raw.githubusercontent.com/ai-gen-images/assets/main/mente-solta-head-logo.png" 
               alt="Mente Solta Logo" 
               className="relative w-full h-full object-contain"
               onError={(e) => {
                 // Fallback if the logo URL isn't real
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-tr', 'from-[#FF5722]', 'to-[#FFC107]', 'rounded-2xl', 'border-4', 'border-white/20', 'shadow-2xl');
               }}
             />
             <div className="absolute -right-4 -top-4 bg-[#FF5722] text-white text-xs font-black px-3 py-1 rounded-full animate-bounce">
               VOLTAMOS!
             </div>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
            MENTE SOLTA<br />
            <span className="text-gradient">ESTÁ DE VOLTA.</span>
          </h1>
          <p className="text-[#FFC107] font-bold italic text-lg md:text-2xl mt-4 max-w-3xl mx-auto">
            "Mente Solta pra sambar, pra ser feliz… do jeito que o coração manda."
          </p>
        </div>

        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light tracking-wide">
          O pagode que marcou uma geração retorna em 2025. Sinta a nostalgia, viva o novo momento.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <button 
            onClick={() => scrollTo('music')}
            className="flex items-center gap-2 bg-[#FF5722] hover:bg-[#e64a19] text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl transition-all hover:scale-105"
          >
            <Play size={20} fill="currentColor" /> OUÇA AGORA
          </button>
          <button 
            onClick={() => scrollTo('schedule')}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
          >
            <Calendar size={20} /> AGENDA DE SHOWS
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#FF5722] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
