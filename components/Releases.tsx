
import React from 'react';
import { Play, Music, ExternalLink } from 'lucide-react';

const RELEASES = [
  {
    id: '1',
    title: 'Fragmentos de Verão',
    description: 'Um curta experimental sobre a transição do tempo e memórias perdidas.',
    image: 'https://picsum.photos/seed/release1/800/450',
    type: 'video'
  },
  {
    id: '2',
    title: 'Batida Solta Vol. 4',
    description: 'Nosso EP mais recente, explorando graves pesados e ritmos urbanos.',
    image: 'https://picsum.photos/seed/release2/800/450',
    type: 'audio'
  },
  {
    id: '3',
    title: 'Visões Distópicas',
    description: 'Galeria digital com artes geradas em colaboração com a comunidade.',
    image: 'https://picsum.photos/seed/release3/800/450',
    type: 'art'
  }
];

const Releases: React.FC = () => {
  return (
    <section id="releases" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center md:text-left">Saiu do Forno: Destaques Recentes</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {RELEASES.map((item) => (
            <div key={item.id} className="glass-card rounded-3xl overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {item.type === 'video' ? <Play size={48} className="text-white fill-white" /> : <Music size={48} />}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-xs uppercase tracking-widest bg-white/10 px-2 py-1 rounded">
                    {item.type}
                  </span>
                </div>
                <p className="text-white/70 mb-6">{item.description}</p>
                <button className="flex items-center gap-2 text-[#FF5722] font-bold hover:underline">
                  EXPLORAR <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Main Release */}
        <div className="mt-16 glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-white/20">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/featured/800/800" 
              alt="Destaque Principal" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="inline-block bg-[#FF5722] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-tighter">
              Destaque do Mês
            </span>
            <h3 className="text-4xl font-black italic">SINFONIA URBANA</h3>
            <p className="text-lg opacity-80 leading-relaxed">
              O projeto mais ambicioso do ano. Unimos 12 artistas locais em uma produção audiovisual 360º. Assista agora no canal oficial do YouTube e sinta a vibração da cidade.
            </p>
            <div className="flex gap-4">
               <button className="bg-white text-[#6200EA] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                 VER NO YOUTUBE
               </button>
               <button className="border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                 SPOTIFY
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Releases;
