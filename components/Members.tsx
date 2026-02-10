
import React from 'react';
import { Mic2, Music2, Star } from 'lucide-react';

const MEMBERS = [
  {
    name: 'Vocal Principal',
    role: 'Voz & Carisma',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400&h=500',
    icon: <Mic2 size={20} />
  },
  {
    name: 'Cavaco',
    role: 'Harmonia & Swing',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400&h=500',
    icon: <Music2 size={20} />
  },
  {
    name: 'Percussão Geral',
    role: 'O Coração da Batida',
    image: 'https://images.unsplash.com/photo-1514525253361-b83f8a9e27c0?auto=format&fit=crop&q=80&w=400&h=500',
    icon: <Star size={20} />
  },
  {
    name: 'Pandeiro',
    role: 'Ritmo & Malandragem',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=400&h=500',
    icon: <Music2 size={20} />
  }
];

const Members: React.FC = () => {
  return (
    <section id="members" className="py-24 px-4 bg-ms-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">OS <span className="text-gradient">PROTAGONISTAS.</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Conheça a alma do Mente Solta. Uma mistura de experiência e juventude focada em fazer você sambar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MEMBERS.map((member, index) => (
            <div key={index} className="group relative overflow-hidden rounded-[32px] glass-card border border-white/5 aspect-[4/5]">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2 text-[#FF5722] mb-2">
                  {member.icon}
                  <span className="text-xs font-bold uppercase tracking-widest">{member.role}</span>
                </div>
                <h3 className="text-2xl font-black text-white">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
