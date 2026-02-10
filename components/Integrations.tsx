
import React from 'react';
import { Youtube, Music, Instagram, Play, ExternalLink } from 'lucide-react';

const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-24 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#FF5722] font-black tracking-widest text-sm mb-4 uppercase">Conectividade</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">HUB <span className="text-gradient">DIGITAL.</span></h2>
          <p className="max-w-2xl text-white/60 text-lg">
            Estamos em todas as plataformas. Do clipe que marcou época no YouTube à playlist que não sai do seu Spotify.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          {/* YouTube Integration Block */}
          <div className="glass-card rounded-[40px] p-8 overflow-hidden group">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-600 p-3 rounded-2xl">
                <Youtube className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">YouTube Official</h3>
                <p className="text-white/40 text-sm">Inscreva-se para clipes e lives</p>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/5">
              <img 
                src="https://picsum.photos/seed/ytvideo/800/450" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                alt="Video Thumbnail"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play size={32} fill="white" className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold">
                CLIPE OFICIAL: RECOMEÇO (2025)
              </div>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <span className="text-white/60 font-bold">850K Visualizações</span>
              <button className="text-red-500 font-bold hover:underline flex items-center gap-2">
                VER CANAL <ExternalLink size={14} />
              </button>
            </div>
          </div>

          {/* Spotify Integration Block */}
          <div className="glass-card rounded-[40px] p-8 overflow-hidden group border-b-4 border-green-500/30">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-green-500 p-3 rounded-2xl">
                <Music className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Spotify Hub</h3>
                <p className="text-white/40 text-sm">A playlist oficial do Mente Solta</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                <img src="https://picsum.photos/seed/track1/60/60" className="rounded-lg" alt="track" />
                <div className="flex-1">
                  <p className="font-bold">Ex-Namorada</p>
                  <p className="text-xs opacity-50">This is Grupo Mente Solta</p>
                </div>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                  <Play size={16} fill="white" />
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                <img src="https://picsum.photos/seed/track2/60/60" className="rounded-lg" alt="track" />
                <div className="flex-1">
                  <p className="font-bold">Desejo e Medo</p>
                  <p className="text-xs opacity-50">Hits do Pagode Anos 2000</p>
                </div>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                  <Play size={16} fill="white" />
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                <img src="https://picsum.photos/seed/track3/60/60" className="rounded-lg" alt="track" />
                <div className="flex-1">
                  <p className="font-bold">Recomeço</p>
                  <p className="text-xs opacity-50">Lançamento 2025</p>
                </div>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                  <Play size={16} fill="white" />
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="text-green-500 font-bold hover:underline">ABRIR NO APP</button>
            </div>
          </div>
        </div>

        {/* Social Feed (Instagram/TikTok Placeholder) */}
        <div className="glass-card rounded-[40px] p-8 md:p-12">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-4">
               <Instagram className="text-[#FFC107]" />
               <h3 className="text-2xl font-bold italic">@MENTESOLTAOFICIAL</h3>
            </div>
            <button className="bg-[#FF5722] px-6 py-2 rounded-full text-sm font-bold">SEGUIR</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer shadow-lg">
                <img src={`https://picsum.photos/seed/insta${i}/400/400`} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" alt="social" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <Instagram size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
