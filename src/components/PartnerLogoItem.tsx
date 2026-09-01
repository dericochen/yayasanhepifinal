import React from 'react';

interface PartnerLogoItemProps {
  partnerId: string;
  name: string;
  className?: string;
}

export const PartnerLogoBadge: React.FC<PartnerLogoItemProps> = ({ partnerId, name, className = 'w-full h-12' }) => {
  switch (partnerId) {
    case 'binus':
      // BINUS University Official Logo Artwork
      return (
        <svg viewBox="0 0 240 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* BINUS Flame Ribbon Emblem */}
          <g transform="translate(8, 4)">
            {/* Orange Ribbon */}
            <path
              d="M32 4 C18 12 12 28 18 42 C22 50 32 54 40 52 C48 50 54 42 52 32 C50 20 38 28 34 32 C28 38 20 34 22 24 C24 14 36 10 32 4 Z"
              fill="#F37021"
            />
            {/* Gold Ribbon Contours */}
            <path
              d="M38 14 C32 20 26 30 32 38 C36 44 44 42 46 36 C48 28 42 22 38 14 Z"
              fill="#FDB813"
            />
            {/* Blue Eye Center */}
            <circle cx="30" cy="20" r="4.5" fill="#005BAA" />
            {/* Base Arc */}
            <path
              d="M14 44 C20 54 36 60 48 54 C56 50 60 40 56 30"
              stroke="#005BAA"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>
          {/* BINUS UNIVERSITY Typography */}
          <text x="75" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="24" fill="#005BAA" letterSpacing="0.5">
            BINUS
          </text>
          <text x="76" y="52" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="11" fill="#F37021" letterSpacing="2">
            UNIVERSITY
          </text>
        </svg>
      );

    case 'whitley':
      // Whitley Fund for Nature (WFN)
      return (
        <svg viewBox="0 0 240 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 8)">
            <circle cx="27" cy="27" r="25" fill="#154734" />
            <path
              d="M14 34 C14 20 24 12 38 14 C36 28 26 38 14 34 Z"
              fill="#84BD00"
            />
            <path
              d="M24 42 C32 40 40 32 42 22 C34 26 28 34 24 42 Z"
              fill="#C4D600"
            />
            <circle cx="22" cy="20" r="3" fill="#FFFFFF" />
          </g>
          <text x="70" y="27" fontFamily="Georgia, serif" fontWeight="700" fontSize="13" fill="#154734" letterSpacing="1">
            WHITLEY
          </text>
          <text x="70" y="42" fontFamily="Georgia, serif" fontWeight="600" fontSize="10" fill="#2D5A27" letterSpacing="1.2">
            FUND FOR NATURE
          </text>
          <text x="70" y="55" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="8" fill="#84BD00" letterSpacing="0.5">
            Whitley Gold Award
          </text>
        </svg>
      );

    case 'hih':
      // Health In Harmony (HIH)
      return (
        <svg viewBox="0 0 240 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 8)">
            <circle cx="27" cy="27" r="25" fill="#EBF5EE" stroke="#2D5A27" strokeWidth="2" />
            <path
              d="M27 10 C32 18 42 22 42 32 C42 40 35 45 27 45 C19 45 12 40 12 32 C12 22 22 18 27 10 Z"
              fill="#2D5A27"
            />
            <path
              d="M27 22 C24 18 19 18 17 22 C14 26 18 31 27 37 C36 31 40 26 37 22 C35 18 30 18 27 22 Z"
              fill="#82C341"
            />
          </g>
          <text x="70" y="30" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14" fill="#2D5A27" letterSpacing="0.8">
            HEALTH IN HARMONY
          </text>
          <text x="70" y="47" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="9.5" fill="#555555" letterSpacing="1">
            Planetary Health Alliance
          </text>
        </svg>
      );

    case 'prcf':
      // PRCF Indonesia (People Resources and Conservation Foundation)
      return (
        <svg viewBox="0 0 240 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 8)">
            <circle cx="27" cy="27" r="25" fill="#0A5C36" />
            {/* PRCF Leaf & Tree silhouette */}
            <path
              d="M27 10 C36 16 42 28 38 40 C32 46 22 46 16 40 C12 28 18 16 27 10 Z"
              fill="#85C226"
            />
            <path
              d="M27 18 C22 24 22 34 27 38 C32 34 32 24 27 18 Z"
              fill="#FFFFFF"
            />
            <circle cx="27" cy="28" r="3" fill="#0A5C36" />
          </g>
          <text x="70" y="28" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16" fill="#0A5C36" letterSpacing="1">
            PRCF
          </text>
          <text x="120" y="28" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="12" fill="#85C226" letterSpacing="0.5">
            INDONESIA
          </text>
          <text x="70" y="46" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="8" fill="#444444">
            People Resources & Conservation
          </text>
          <text x="70" y="57" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="8" fill="#777777">
            Foundation
          </text>
        </svg>
      );

    case 'tapsel':
      // Pemkab Tapanuli Selatan
      return (
        <svg viewBox="0 0 240 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(12, 6)">
            <path
              d="M26 4 L48 10 L48 34 C48 46 26 56 26 56 C26 56 4 46 4 34 L4 10 Z"
              fill="#0F3822"
              stroke="#D4AF37"
              strokeWidth="2"
            />
            <polygon points="26,12 29,19 36,19 30,24 33,31 26,27 19,31 22,24 16,19 23,19" fill="#FFD700" />
            <path d="M12 42 L20 30 L28 38 L36 28 L40 42 Z" fill="#2D7A47" />
          </g>
          <text x="68" y="27" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="11" fill="#1A1A1A" letterSpacing="0.5">
            PEMERINTAH KABUPATEN
          </text>
          <text x="68" y="44" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="#0F3822" letterSpacing="1">
            TAPANULI SELATAN
          </text>
          <text x="68" y="57" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="8.5" fill="#666666">
            Sumatera Utara
          </text>
        </svg>
      );

    case 'bksda':
      // BKSDA Sumatera Utara (KLHK)
      return (
        <svg viewBox="0 0 240 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(12, 7)">
            <circle cx="26" cy="26" r="24" fill="#005A36" stroke="#D4AF37" strokeWidth="2" />
            <path
              d="M26 12 C21 16 16 22 17 30 C19 36 24 40 26 40 C28 40 33 36 35 30 C36 22 31 16 26 12 Z"
              fill="#FFFFFF"
            />
            <path d="M26 24 L26 40" stroke="#005A36" strokeWidth="2" />
            <polygon points="26,14 28,19 34,19 29,23 31,28 26,25 21,28 23,23 18,19 24,19" fill="#FFCC00" />
          </g>
          <text x="68" y="26" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="12" fill="#005A36" letterSpacing="0.5">
            BKSDA SUMATERA UTARA
          </text>
          <text x="68" y="42" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9.5" fill="#333333">
            Kementerian LHK RI
          </text>
          <text x="68" y="55" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="8" fill="#666666">
            Konservasi SDA & Ekosistem
          </text>
        </svg>
      );

    case 'pbnf':
      // Prince Bernhard Nature Fund
      return (
        <svg viewBox="0 0 240 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(12, 8)">
            <circle cx="25" cy="25" r="24" fill="#1C3F60" />
            <path
              d="M25 12 C21 17 15 21 17 29 C19 35 24 38 25 38 C26 38 31 35 33 29 C35 21 29 17 25 12 Z"
              fill="#FFFFFF"
            />
            <circle cx="25" cy="25" r="4" fill="#D4AF37" />
            <path d="M19 25 C22 23 28 23 31 25" stroke="#1C3F60" strokeWidth="1.5" />
          </g>
          <text x="68" y="26" fontFamily="Georgia, serif" fontWeight="700" fontSize="11.5" fill="#1C3F60" letterSpacing="0.5">
            PRINCE BERNHARD
          </text>
          <text x="68" y="42" fontFamily="Georgia, serif" fontWeight="600" fontSize="11" fill="#1C3F60" letterSpacing="0.5">
            NATURE FUND
          </text>
          <text x="68" y="55" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="8" fill="#D4AF37">
            Flora & Fauna Conservation
          </text>
        </svg>
      );

    case 'oic':
      // Orangutan Information Centre
      return (
        <svg viewBox="0 0 240 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(12, 7)">
            <circle cx="26" cy="26" r="24" fill="#F47920" />
            <path
              d="M17 26 C17 18 21 14 26 14 C31 14 35 18 35 26 C35 34 31 38 26 38 C21 38 17 34 17 26 Z"
              fill="#5A2E13"
            />
            <circle cx="22" cy="24" r="2" fill="#FFFFFF" />
            <circle cx="30" cy="24" r="2" fill="#FFFFFF" />
            <path d="M23 30 Q26 33 29 30" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 22 C12 26 14 30 17 31" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
            <path d="M38 22 C40 26 38 30 35 31" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
          </g>
          <text x="68" y="27" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="12" fill="#5A2E13" letterSpacing="0.5">
            ORANGUTAN
          </text>
          <text x="68" y="42" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="9.5" fill="#F47920" letterSpacing="0.8">
            INFORMATION CENTRE
          </text>
          <text x="68" y="55" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="8" fill="#666666">
            Sumatran Wildlife Alliance
          </text>
        </svg>
      );

    default:
      return (
        <div className="flex items-center justify-center font-bold text-xs text-[#1A1A1A]">
          {name}
        </div>
      );
  }
};
