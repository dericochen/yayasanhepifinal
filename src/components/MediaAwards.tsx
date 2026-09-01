import React, { useState } from 'react';
import { Language, MediaStory } from '../types';
import { MEDIA_STORIES } from '../data/hepiData';
import { 
  Award, 
  ExternalLink, 
  BookOpen, 
  Newspaper, 
  X, 
  Calendar,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface MediaAwardsProps {
  lang: Language;
}

export const MediaAwards: React.FC<MediaAwardsProps> = ({ lang }) => {
  const isId = lang === 'id';
  const [selectedStory, setSelectedStory] = useState<MediaStory | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'award' | 'news' | 'feature' | 'field'>('all');

  const filteredStories = activeTab === 'all' 
    ? MEDIA_STORIES 
    : MEDIA_STORIES.filter((s) => s.category === activeTab);

  return (
    <section id="media" className="py-16 sm:py-24 bg-[#FCFCFB] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <Newspaper className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Warta Konservasi & Penghargaan' : 'Conservation News & Awards'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Berita & Pengakuan Dunia' : 'Field News & Global Recognition'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666] leading-relaxed">
            {isId 
              ? 'Ikuti perkembangan terbaru penanaman bibit, laporan satwa Orangutan Tapanuli, serta liputan media internasional mengenai Yayasan HEPI.' 
              : 'Follow our latest field milestones, Tapanuli Orangutan field dispatches, and global media coverage of HePI Foundation.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'all', label: isId ? 'Semua Berita' : 'All Stories' },
              { id: 'news', label: isId ? 'Kabar Lapangan' : 'Field News' },
              { id: 'award', label: isId ? 'Penghargaan Dunia' : 'Global Awards' },
              { id: 'feature', label: isId ? 'Liputan Media' : 'Media Features' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  activeTab === tab.id
                    ? 'bg-[#2D5A27] text-white border-[#2D5A27] shadow-2xs'
                    : 'bg-white text-[#666666] border-[#EBEBE8] hover:bg-[#EBEBE8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* News & Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStories.map((story) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2D5A27] text-[10px] font-bold uppercase shadow-2xs">
                    {story.source}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="text-[11px] text-[#2D5A27] font-bold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{story.date}</span>
                  </div>
                  <h3 className="text-base font-normal text-[#1A1A1A] font-serif leading-snug group-hover:text-[#2D5A27] transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed line-clamp-3">
                    {story.excerpt[lang]}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#EBEBE8] mt-2">
                <button
                  onClick={() => setSelectedStory(story)}
                  className="text-xs font-bold text-[#2D5A27] hover:underline flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isId ? 'Baca Berita' : 'Read Article'}</span>
                </button>

                {story.externalUrl && (
                  <a
                    href={story.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#F1F3F0] hover:bg-[#2D5A27] text-[#1A1A1A] hover:text-white transition-colors"
                    title={isId ? 'Kunjungi Situs Sumber' : 'Visit Source'}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
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
          <div className="bg-white rounded-[28px] max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#F1F3F0] hover:bg-[#EBEBE8] text-[#1A1A1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-52 rounded-2xl overflow-hidden">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white font-normal text-lg font-serif">
                {selectedStory.title}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-[#2D5A27] uppercase tracking-wider">
              <span>{selectedStory.source}</span>
              <span className="text-[#666666]">{selectedStory.date}</span>
            </div>

            <p className="text-sm text-[#333333] leading-relaxed">
              {selectedStory.fullStory ? selectedStory.fullStory[lang] : selectedStory.excerpt[lang]}
            </p>

            <div className="pt-4 border-t border-[#EBEBE8] flex items-center justify-between">
              <span className="text-xs text-[#666666]">
                {isId ? 'Sumber Berita Resmi' : 'Official Press Coverage'}
              </span>
              {selectedStory.externalUrl && (
                <a
                  href={selectedStory.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-[#2D5A27] text-white font-semibold text-xs flex items-center gap-1.5 hover:bg-[#22461E]"
                >
                  <span>{isId ? 'Kunjungi Situs Sumber' : 'Visit Official Article'}</span>
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
