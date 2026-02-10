
import React from 'react';
import { Mail, Phone, Instagram, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-ms-gradient">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-black mb-8 leading-tight">VAMOS FAZER <span className="text-gradient">HISTÓRIA JUNTOS.</span></h2>
          <p className="text-xl text-white/60 mb-12">
            Para shows, parcerias comerciais ou entrevistas, utilize os canais oficiais de booking.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 p-6 glass rounded-2xl border-l-4 border-[#FF5722]">
              <div className="bg-[#FF5722]/10 p-4 rounded-full text-[#FF5722]">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold opacity-40">Booking Oficial</p>
                <p className="text-xl font-bold">(11) 98765-4321</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-6 glass rounded-2xl border-l-4 border-[#FFC107]">
              <div className="bg-[#FFC107]/10 p-4 rounded-full text-[#FFC107]">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold opacity-40">E-mail</p>
                <p className="text-xl font-bold">contato@mentesolta.com.br</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-6 glass rounded-2xl border-l-4 border-[#D32F2F]">
              <div className="bg-[#D32F2F]/10 p-4 rounded-full text-[#D32F2F]">
                <Instagram size={24} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold opacity-40">Redes Sociais</p>
                <p className="text-xl font-bold">@mentesoltaoficial</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-[40px] border border-white/10">
          <h3 className="text-2xl font-bold mb-8">SOLICITAR ORÇAMENTO</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Seu Nome" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#FF5722] outline-none" />
              <input type="email" placeholder="Seu E-mail" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#FF5722] outline-none" />
            </div>
            <input type="text" placeholder="Cidade / Local do Evento" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#FF5722] outline-none" />
            <textarea placeholder="Fale um pouco sobre o evento..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 h-32 resize-none focus:ring-2 focus:ring-[#FF5722] outline-none"></textarea>
            <button className="w-full bg-[#FF5722] hover:bg-[#e64a19] text-white py-5 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-3 transition-all">
              ENVIAR SOLICITAÇÃO <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
