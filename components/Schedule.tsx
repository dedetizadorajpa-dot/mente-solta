
import React from 'react';
import { MapPin, Ticket, Clock } from 'lucide-react';

const GIGS = [
  { id: '1', date: '12 MAI', city: 'São Paulo, SP', venue: 'Espaço das Américas', status: 'INGRESSOS' },
  { id: '2', date: '18 MAI', city: 'Rio de Janeiro, RJ', venue: 'Vivo Rio', status: 'ESGOTADO' },
  { id: '3', date: '25 MAI', city: 'Belo Horizonte, MG', venue: 'KM de Vantagens Hall', status: 'INGRESSOS' },
  { id: '4', date: '02 JUN', city: 'Salvador, BA', venue: 'Concha Acústica', status: 'INGRESSOS' },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-black mb-16 text-center">PRÓXIMAS <span className="text-gradient">PARADAS.</span></h2>
        
        <div className="space-y-4">
          {GIGS.map((gig) => (
            <div key={gig.id} className="glass-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-8 w-full md:w-auto">
                <div className="bg-white text-black p-4 rounded-2xl text-center min-w-[100px]">
                  <p className="text-xs font-black uppercase tracking-widest opacity-60">{gig.date.split(' ')[1]}</p>
                  <p className="text-3xl font-black">{gig.date.split(' ')[0]}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{gig.city}</h3>
                  <p className="flex items-center gap-2 text-white/50">
                    <MapPin size={14} className="text-[#FF5722]" /> {gig.venue}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                <div className="flex items-center gap-2 text-sm font-medium text-white/60">
                  <Clock size={16} /> 22:00h
                </div>
                <button 
                  disabled={gig.status === 'ESGOTADO'}
                  className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                    gig.status === 'ESGOTADO' 
                      ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                      : 'bg-[#FF5722] hover:bg-[#e64a19] text-white'
                  }`}
                >
                  <Ticket size={18} /> {gig.status}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-6">Quer o Mente Solta no seu evento?</p>
          <a href="#contact" className="inline-block border-2 border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722] hover:text-white font-black px-12 py-4 rounded-full transition-all">
            CONTRATAR SHOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
