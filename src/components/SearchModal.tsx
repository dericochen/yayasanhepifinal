import React, { useState } from 'react';
import { Language } from '../types';
import { PROGRAMS, MEDIA_STORIES, FAQS } from '../data/hepiData';
import { Search, X, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;
  const isId = lang === 'id';

  const [query, setQuery] = useState('');

  // Filter matching items
  const matchedPrograms = query.trim() === '' ? [] : PROGRAMS.filter((p) => 
    p.title[lang].toLowerCase().includes(query.toLowerCase()) ||
    p.summary[lang].toLowerCase().includes(query.toLowerCase())
  );

  const matchedMedia = query.trim() === '' ? [] : MEDIA_STORIES.filter((m) =>
    m.title.toLowerCase().includes(query.toLowerCase()) ||
    m.excerpt[lang].toLowerCase().includes(query.toLowerCase())
  );

  const matchedFaqs = query.trim() === '' ? [] : FAQS.filter((f) =>
    f.question[lang].toLowerCase().includes(query.toLowerCase()) ||
    f.answer[lang].toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-[28px] max-w-2xl w-full p-6 relative shadow-2xl space-y-4">
        
        {/* Search Bar Input */}
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-[#2D5A27] absolute left-4" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isId ? 'Cari program, berita, Whitley Award, atau FAQ...' : 'Search programs, news, Whitley Award, or FAQs...'}
            className="w-full pl-12 pr-10 py-3.5 rounded-full bg-[#F1F3F0] border border-[#EBEBE8] text-sm font-medium text-[#1A1A1A] focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none"
          />
          <button
            onClick={onClose}
            className="absolute right-3 p-1.5 rounded-full text-[#666666] hover:bg-[#EBEBE8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto space-y-4 pt-2">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-xs text-[#666666]">
              {isId ? 'Ketik kata kunci pencarian (contoh: "Orangutan", "Whitley", "Klinik", "Bibit")' : 'Type search terms (e.g., "Orangutan", "Whitley", "Clinic", "Trees")'}
            </div>
          ) : (
            <>
              {/* Programs */}
              {matchedPrograms.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase text-[#2D5A27] tracking-wider">
                    {isId ? 'Program Utama:' : 'Programs:'}
                  </div>
                  {matchedPrograms.map((p) => (
                    <a
                      key={p.id}
                      href="#programs"
                      onClick={onClose}
                      className="block p-3.5 rounded-2xl bg-[#FCFCFB] border border-[#EBEBE8] hover:border-[#2D5A27] transition-all"
                    >
                      <div className="font-bold text-sm text-[#1A1A1A]">{p.title[lang]}</div>
                      <div className="text-xs text-[#666666] mt-0.5 line-clamp-1">{p.summary[lang]}</div>
                    </a>
                  ))}
                </div>
              )}

              {/* Media */}
              {matchedMedia.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase text-[#2D5A27] tracking-wider">
                    {isId ? 'Berita & Media:' : 'Media Stories:'}
                  </div>
                  {matchedMedia.map((m) => (
                    <a
                      key={m.id}
                      href="#media"
                      onClick={onClose}
                      className="block p-3.5 rounded-2xl bg-[#FCFCFB] border border-[#EBEBE8] hover:border-[#2D5A27] transition-all"
                    >
                      <div className="font-bold text-sm text-[#1A1A1A]">{m.title}</div>
                      <div className="text-xs text-[#666666] mt-0.5 line-clamp-1">{m.excerpt[lang]}</div>
                    </a>
                  ))}
                </div>
              )}

              {/* FAQs */}
              {matchedFaqs.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase text-[#d97706] tracking-wider">
                    {isId ? 'Pertanyaan FAQ:' : 'FAQs:'}
                  </div>
                  {matchedFaqs.map((f) => (
                    <a
                      key={f.id}
                      href="#transparency"
                      onClick={onClose}
                      className="block p-3.5 rounded-2xl bg-[#FCFCFB] border border-[#EBEBE8] hover:border-[#2D5A27] transition-all"
                    >
                      <div className="font-bold text-sm text-[#1A1A1A]">{f.question[lang]}</div>
                      <div className="text-xs text-[#666666] mt-0.5 line-clamp-1">{f.answer[lang]}</div>
                    </a>
                  ))}
                </div>
              )}

              {matchedPrograms.length === 0 && matchedMedia.length === 0 && matchedFaqs.length === 0 && (
                <div className="text-center py-8 text-xs text-[#666666]">
                  {isId ? `Tidak ada hasil untuk "${query}"` : `No results found for "${query}"`}
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
