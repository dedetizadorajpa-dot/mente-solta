
import React from 'react';
import { Disc, PlayCircle, ExternalLink } from 'lucide-react';

const TRACKS = [
  { id: '1', name: 'Ex-Namorada', year: '2004', duration: '3:45' },
  { id: '2', name: 'Desejo e Medo', year: '2005', duration: '4:12' },
  { id: '3', name: 'Coração em Festa', year: '2008', duration: '3:30' },
  { id: '4', name: 'Falta de Você', year: '2025', duration: '3:55' },
];

const MusicSection: React.FC = () => {
  return (
    <section id="music" className="py-24 px-4 bg-ms-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-5xl font-black mb-4">DISCOGRAFIA <span className="text-gradient">SOLTA.</span></h2>
            <p className="text-white/60 text-lg">As canções que marcaram gerações e as novas batidas que vão te conquistar.</p>
          </div>
          <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-[#FF5722] hover:text-white transition-all">
            SPOTIFY COMPLETO
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Featured Album */}
          <div className="glass-card rounded-[40px] p-8 flex flex-col items-center text-center">
            <div className="relative group mb-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5722] to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
              <img src="https://picsum.photos/seed/album2025/500/500" className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl relative" alt="Album Cover" />
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-2xl">
                <PlayCircle size={80} className="text-[#FF5722]" />
              </button>
            </div>
            <h3 className="text-3xl font-black mb-2">RECOMEÇO (DELUXE)</h3>
            <p className="text-[#FF5722] font-bold mb-6">LANÇAMENTO 2025</p>
            <div className="w-full space-y-2 text-left">
              {TRACKS.map(track => (
                <div key={track.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 group">
                  <div className="flex items-center gap-4">
                    <span className="text-white/30 font-mono">{track.id.padStart(2, '0')}</span>
                    <span className="font-medium">{track.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-white/30 text-sm">{track.duration}</span>
                    <PlayCircle size={18} className="opacity-0 group-hover:opacity-100 text-[#FF5722]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Hits List */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-2 mb-8">
              <Disc className="text-[#FFC107]" /> HITS HISTÓRICOS
            </h4>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 p-4 glass rounded-2xl hover:border-[#FF5722]/50 transition-colors cursor-pointer group">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-900">
                  <img src={`https://picsum.photos/seed/oldhit${i}/150/150`} alt="Hit" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#FF5722] font-bold">ÁLBUM VOL. {i + 1}</p>
                  <h5 className="text-xl font-bold">Clássico Atemporal {i + 1}</h5>
                </div>
                <ExternalLink size={20} className="opacity-40 group-hover:opacity-100 group-hover:text-[#FF5722] transition-all" />
              </div>
            ))}
            
            <div className="mt-12 p-8 border-2 border-dashed border-white/10 rounded-3xl text-center">
              <p className="text-white/50 mb-4 italic">"Mente Solta é mais que música, é sentimento puro."</p>
              <p className="font-bold text-sm">— Comunidade de Fãs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
