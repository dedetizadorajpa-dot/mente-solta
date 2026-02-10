
import React, { useState } from 'react';
import { MuralNote } from '../types';
import { Plus, X } from 'lucide-react';

const COLORS = [
  'bg-yellow-200 text-gray-800',
  'bg-pink-300 text-gray-800',
  'bg-blue-300 text-gray-800',
  'bg-green-300 text-gray-800',
  'bg-purple-300 text-gray-800'
];

const CommunityMural: React.FC = () => {
  const [notes, setNotes] = useState<MuralNote[]>([
    { id: '1', content: 'Solta essa mente galera! O clipe novo tá absurdo!', author: 'Davi', color: COLORS[0], timestamp: Date.now() },
    { id: '2', content: 'Alguém topa colaborar numa arte 3D?', author: 'Ana_Art', color: COLORS[2], timestamp: Date.now() },
  ]);
  const [newContent, setNewContent] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const addNote = () => {
    if (!newContent.trim()) return;
    const note: MuralNote = {
      id: Math.random().toString(36).substr(2, 9),
      content: newContent,
      author: newAuthor || 'Anônimo',
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      timestamp: Date.now()
    };
    setNotes([note, ...notes]);
    setNewContent('');
    setNewAuthor('');
    setIsAdding(false);
  };

  return (
    <section id="community" className="py-24 px-4 bg-gradient-to-b from-transparent to-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Mural Mente Solta: Cole Sua Ideia</h2>
            <p className="text-lg opacity-80">Este espaço é seu. Deixe um salve, uma inspiração ou sua arte para o mundo.</p>
          </div>
          <button 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 bg-[#FF5722] hover:bg-[#e64a19] px-6 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
          >
            <Plus size={20} /> ADICIONAR NOTA
          </button>
        </div>

        {isAdding && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="glass w-full max-w-md p-8 rounded-3xl border border-white/20 animate-in zoom-in duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Nova Nota</h3>
                <button onClick={() => setIsAdding(false)}><X /></button>
              </div>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="O que você quer dizer?"
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 mb-4 text-white focus:outline-none focus:ring-2 focus:ring-[#FF5722] min-h-[120px]"
              />
              <input
                type="text"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Seu nome ou nick"
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 mb-6 text-white"
              />
              <button 
                onClick={addNote}
                className="w-full bg-[#FF5722] py-4 rounded-xl font-bold hover:bg-[#e64a19]"
              >
                PUBLICAR NO MURAL
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {notes.map((note) => (
            <div 
              key={note.id} 
              className={`${note.color} p-6 rounded-lg shadow-xl transform rotate-[${(Math.random() * 4 - 2).toFixed(1)}deg] hover:rotate-0 transition-all hover:scale-105 min-h-[180px] flex flex-col justify-between`}
            >
              <p className="font-medium text-lg italic leading-tight">"{note.content}"</p>
              <div className="mt-4 border-t border-black/10 pt-2 flex justify-between items-center text-xs font-bold opacity-60">
                <span>{note.author}</span>
                <span>{new Date(note.timestamp).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityMural;
