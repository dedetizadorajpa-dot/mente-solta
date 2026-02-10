
import React, { useState } from 'react';
import { Instagram, Youtube, Twitter, Facebook, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const socialClasses = "hover:text-[#FF5722] transition-colors duration-300 transform hover:scale-125";

  return (
    <footer className="bg-black/80 pt-20 pb-10 px-4 mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-4xl font-black mb-6">Não Perca o Ritmo.</h2>
          <p className="text-xl opacity-70 mb-8">
            Entre para a lista VIP do Mente Solta e receba lançamentos, artes exclusivas e convites secretos antes de todo mundo.
          </p>
          
          {subscribed ? (
            <div className="bg-green-500/20 border border-green-500 text-green-300 p-4 rounded-2xl animate-in fade-in">
              Você está na lista! Aguarde as batidas secretas.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-4">
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              />
              <button type="submit" className="bg-[#FF5722] p-4 rounded-full hover:scale-110 transition-transform">
                <Send size={24} />
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col items-center md:items-end justify-center">
          <div className="flex gap-8 mb-10">
            <a href="#" className={socialClasses}><Instagram size={40} /></a>
            <a href="#" className={socialClasses}><Youtube size={40} /></a>
            <a href="#" className={socialClasses}><Twitter size={40} /></a>
            <a href="#" className={socialClasses}><Facebook size={40} /></a>
          </div>
          <div className="text-right opacity-40">
            <img 
              src="https://raw.githubusercontent.com/ai-gen-images/assets/main/mente-solta-logo-transparent.png" 
              alt="Mente Solta Logo Small" 
              className="h-16 ml-auto mb-4 grayscale brightness-200"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <p>&copy; {new Date().getFullYear()} Grupo Mente Solta. Todos os direitos reservados.</p>
            <p className="text-sm mt-1">Design Disruptivo by Mente Solta Engine</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
