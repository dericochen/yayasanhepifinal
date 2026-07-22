import React, { useState } from 'react';
import { Language, MediaStory } from '../types';
import { MEDIA_STORIES } from '../data/hepiData';
import { 
  Award, 
  ExternalLink, 
  Radio, 
  Globe, 
  Newspaper, 
  X, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface MediaAwardsProps {
  lang: Language;
}

export const MediaAwards: React.FC<MediaAwardsProps> = ({ lang }) => {
  const isId = lang === 'id';
  const [selectedStory, setSelectedStory] = useState<MediaStory | null>(null);

  return (
    <section id="media" className="py-16 sm:py-24 bg-[#FCFCFB] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <Award className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Pengakuan Internasional' : 'International Recognition'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Media & Penghargaan Dunia' : 'Media Features & Global Awards'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666]">
            {isId 
              ? 'Inovasi kesehatan dan pelestarian hutan Yayasan HEPI diakui oleh lembaga konservasi terkemuka di dunia.' 
              : 'HePI\'s healthcare and conservation model recognized by leading international organizations.'}
          </p>
        </div>

        {/* Stories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEDIA_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-[28px] overflow-hidden border border-[#EBEBE8] shadow-2xs hover:border-[#2D5A27]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#2D5A27] text-white text-[11px] font-bold">
                    {story.source}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-xs text-[#666666] font-semibold">{story.date}</div>
                  <h3 className="text-lg font-normal text-[#1A1A1A] font-serif leading-snug group-hover:text-[#2D5A27] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed line-clamp-3">
                    {story.excerpt[lang]}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#EBEBE8] mt-4">
                <button
                  onClick={() => setSelectedStory(story)}
                  className="text-xs font-bold text-[#2D5A27] hover:underline flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isId ? 'Baca Ringkasan' : 'Read Summary'}</span>
                </button>

                {story.externalUrl && (
                  <a
                    href={story.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#F1F3F0] hover:bg-[#2D5A27] text-[#1A1A1A] hover:text-white transition-colors"
                    title={isId ? 'Lihat Artikel Asli' : 'Visit Original Article'}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Story Reader Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-[28px] max-w-xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#F1F3F0] hover:bg-[#EBEBE8] text-[#1A1A1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white font-normal text-lg font-serif">
                {selectedStory.title}
              </div>
            </div>

            <div className="text-xs font-bold text-[#2D5A27] uppercase tracking-wider">
              {selectedStory.source} ({selectedStory.date})
            </div>

            <p className="text-sm text-[#1A1A1A] leading-relaxed">
              {selectedStory.fullStory ? selectedStory.fullStory[lang] : selectedStory.excerpt[lang]}
            </p>

            <div className="pt-4 border-t border-[#EBEBE8] flex items-center justify-between">
              <span className="text-xs text-[#666666]">
                {isId ? 'Sumber Resmi Liputan' : 'Official Coverage Source'}
              </span>
              {selectedStory.externalUrl && (
                <a
                  href={selectedStory.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-[#2D5A27] text-white font-semibold text-xs flex items-center gap-1.5 hover:bg-[#22461E]"
                >
                  <span>{isId ? 'Kunjungi Situs Asli' : 'Visit Original Article'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
