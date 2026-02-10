
import React from 'react';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    id: '1',
    name: 'Camiseta Official Black',
    price: 'R$ 89,90',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=500&h=600',
    tag: 'Mais Vendido'
  },
  {
    id: '2',
    name: 'Boné Mente Solta Premium',
    price: 'R$ 65,00',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=500&h=600',
    tag: 'Novo'
  },
  {
    id: '3',
    name: 'Caneca Colecionador',
    price: 'R$ 45,00',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=500&h=600',
    tag: 'Limited'
  },
  {
    id: '4',
    name: 'Copo Térmico Black Matte',
    price: 'R$ 120,00',
    image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=500&h=600',
    tag: 'Tour 2025'
  }
];

const Store: React.FC = () => {
  return (
    <section id="store" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-[#FF5722] font-black tracking-widest uppercase text-sm">
              <ShoppingBag size={18} /> Mente Solta Shop
            </div>
            <h2 className="text-4xl md:text-6xl font-black">VISTA A <span className="text-gradient">BATIDA.</span></h2>
            <p className="text-white/60 text-lg max-w-xl">
              Leve um pedaço da nossa história com você. Produtos exclusivos feitos para quem tem a mente solta e o coração no samba.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
            VER LOJA COMPLETA <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="glass-card rounded-[40px] overflow-hidden group border border-white/5 p-4 flex flex-col h-full">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 bg-gray-900">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#FF5722] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  {product.tag}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button className="bg-white text-black px-6 py-3 rounded-full font-black text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                     ADICIONAR AO CARRINHO
                   </button>
                </div>
              </div>
              
              <div className="flex-1 space-y-2 px-2">
                <div className="flex justify-between items-start">
                   <h3 className="font-bold text-lg group-hover:text-[#FF5722] transition-colors">{product.name}</h3>
                   <div className="flex items-center text-[#FFC107]">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold ml-1">5.0</span>
                   </div>
                </div>
                <p className="text-2xl font-black text-white">{product.price}</p>
              </div>

              <div className="mt-6">
                <button className="w-full bg-white/5 group-hover:bg-[#FF5722] text-white py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2">
                  ADQUIRIR AGORA <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:hidden">
          <button className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-full font-bold">
            VER LOJA COMPLETA <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Store;
