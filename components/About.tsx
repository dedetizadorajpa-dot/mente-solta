
import React from 'react';
import { History, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/vintage1/400/500" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Anos 2000" />
              <img src="https://picsum.photos/seed/current1/400/500" className="rounded-2xl mt-8 shadow-2xl border-4 border-[#FF5722]/30" alt="Nova Formação 2025" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl hidden md:block">
              <p className="text-[#FF5722] font-black text-4xl italic">20+ ANOS</p>
              <p className="text-xs uppercase tracking-widest opacity-60">De pura história</p>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-[#FF5722] font-bold tracking-widest uppercase text-sm">
              <History size={16} /> Nossa Jornada
            </div>
            <h2 className="text-4xl md:text-6xl font-black">DO CLASSICO AO <span className="text-gradient">EXTRAORDINÁRIO.</span></h2>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
              <p>
                O Grupo Mente Solta nasceu no coração do pagode romântico dos anos 2000. Com letras que falavam direto ao coração, embalamos milhares de histórias de amor, términos e recomeços.
              </p>
              <p>
                Após um hiato necessário para maturação criativa, voltamos em 2025 com uma nova formação que respeita o legado, mas traz a sonoridade urbana e moderna que o público de hoje pede.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 glass rounded-xl border-l-4 border-[#FF5722]">
                <Heart className="text-[#FF5722] mb-2" />
                <h4 className="font-bold">Essência</h4>
                <p className="text-sm opacity-60">Romantismo visceral</p>
              </div>
              <div className="p-4 glass rounded-xl border-l-4 border-[#FFC107]">
                <Users className="text-[#FFC107] mb-2" />
                <h4 className="font-bold">União</h4>
                <p className="text-sm opacity-60">Conexão com os fãs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
