import { ProgramItem, MediaStory, ImpactMetric, TeamMember, FAQItem, AnnualReport } from '../types';

export const HEPI_INFO = {
  name: "Yayasan Healthy Planet Indonesia (HePI)",
  shortName: "HePI",
  tagline: {
    id: "Menghubungkan Kesehatan Masyarakat & Kelestarian Hutan Batang Toru",
    en: "Integrating Conservation & Healthcare in the Batang Toru Ecosystem"
  },
  mission: {
    id: "Memutus rantai kemiskinan dan deforestasi dengan menyediakan akses kesehatan terjangkau bagi masyarakat sekitar hutan melalui pembayaran bibit pohon dan program konservasi berbasis komunitas.",
    en: "Breaking the cycle of poverty and deforestation by providing affordable healthcare to forest-adjacent communities through tree-seedling payments and community-based conservation."
  },
  vision: {
    id: "Masyarakat sehat yang hidup harmonis menjaga Ekosistem Batang Toru dan habitat Orangutan Tapanuli yang lestari.",
    en: "Healthy communities living in harmony to guard the Batang Toru Ecosystem and protect the critically endangered Tapanuli Orangutan."
  },
  location: "Batang Toru Ecosystem, Kabupaten Tapanuli, Sumatera Utara, Indonesia",
  foundingStory: {
    id: "Healthy Planet Indonesia (HePI) berfokus di Ekosistem Batang Toru seluas 141.749 hektar hutan primer di Tapanuli, Sumatera Utara. Wilayah ini merupakan satu-satunya habitat asli Orangutan Tapanuli (Pongo tapanuliensis) yang amat langka dengan hanya tersisa sekitar 800 individu. HePI mengadopsi pendekatan 'Planetary Health' — masyarakat dapat membayar pengobatan dengan bibit pohon untuk reboisasi, menghentikan penebangan liar secara berkelanjutan.",
    en: "Healthy Planet Indonesia (HePI) focuses on the 141,749-hectare primary forest of the Batang Toru Ecosystem in Tapanuli, North Sumatra. This unique region is the sole habitat of the critically endangered Tapanuli Orangutan (Pongo tapanuliensis), with only about 800 individuals remaining. HePI integrates health and conservation so villagers can use tree saplings as medical payment, halting illegal logging."
  },
  contact: {
    address: "Jl.Sisingamangaraja No.488, Kelurahan Suka Maju, Kec. Medan Johor, Kota Medan 20146, Sumatera Utara, Indonesia",
    email: "info@yayasanhepi.org",
    phone: "082277934424",
    socials: {
      instagram: "https://instagram.com/yayasanhepi",
      facebook: "https://facebook.com/yayasanhepi",
      youtube: "https://youtube.com/@yayasanhepi"
    },
    bankAccounts: [
      {
        bank: "Bank Mandiri",
        accountNumber: "108-00-1928374-1",
        accountName: "Yayasan Healthy Planet Indonesia",
        branch: "KCP Tarutung"
      },
      {
        bank: "Bank BCA",
        accountNumber: "823-0918-291",
        accountName: "Yayasan Healthy Planet Indonesia",
        branch: "KCU Medan"
      }
    ]
  }
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'forest-protected',
    numericValue: 141749,
    suffix: ' ha',
    label: {
      id: 'Hutan Batang Toru Dilindungi',
      en: 'Batang Toru Primary Forest Protected'
    },
    description: {
      id: 'Ekosistem hutan primer tempat hidup 800 Orangutan Tapanuli.',
      en: 'Primary forest ecosystem hosting all remaining ~800 Tapanuli Orangutans.'
    },
    icon: 'Trees'
  },
  {
    id: 'patients-treated',
    numericValue: 14250,
    prefix: '>',
    label: {
      id: 'Pasien Berobat Bebas Biaya Penebangan',
      en: 'Patients Treated Without Wood Logging'
    },
    description: {
      id: 'Warga desa sekitar hutan yang mendapatkan pengobatan berkualitas.',
      en: 'Local villagers receiving quality medical & dental care.'
    },
    icon: 'HeartPulse'
  },
  {
    id: 'trees-planted',
    numericValue: 85000,
    prefix: '+',
    label: {
      id: 'Bibit Pohon Ditanam Kembali',
      en: 'Tree Saplings Planted & Nursery'
    },
    description: {
      id: 'Bibit pohon lokal yang disetor masyarakat sebagai biaya berobat.',
      en: 'Native seedlings traded by community members as health payments.'
    },
    icon: 'Sprout'
  },
  {
    id: 'orangutans-guarded',
    numericValue: 800,
    prefix: '~',
    label: {
      id: 'Orangutan Tapanuli Dilindungi',
      en: 'Tapanuli Orangutans Protected'
    },
    description: {
      id: 'Spesies orangutan paling langka di dunia dalam ekosistem Batang Toru.',
      en: 'The rarest great ape species on Earth guarded through forest patrols.'
    },
    icon: 'ShieldCheck'
  }
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'eco-clinic',
    title: {
      id: 'Klinik Kesehatan & Konservasi Masyarakat',
      en: 'Community Eco-Clinic & Non-Cash Healthcare'
    },
    category: 'health',
    summary: {
      id: 'Masyarakat membayar biaya medis dan perawatan gigi dengan bibit pohon, kompos, atau karya kerajinan ramah lingkungan, menggantikan kebutuhan penebangan kayu liar.',
      en: 'Villagers pay for medical & dental care using tree seedlings or compost, replacing the financial urge for illegal logging.'
    },
    fullDescription: {
      id: 'Banyak warga desa terpaksa menebak pohon di Hutan Batang Toru ketika anggota keluarga jatuh sakit dan butuh biaya pengobatan mendadak. HePI memutus rantai ini dengan mendirikan Klinik Kesehatan Terpadu. Warga yang tidak menebang pohon mendapatkan diskon layanan kesehatan hingga 70%, dan sisanya dapat dibayar menggunakan bibit pohon hutan lokal yang dibesarkan di pekarangan rumah.',
      en: 'Many villagers are driven to illegal logging in Batang Toru forest when family members fall ill and face sudden medical costs. HePI breaks this cycle with an Integrated Eco-Clinic. Non-logging households receive up to 70% medical discounts, paying the rest with home-grown native tree saplings.'
    },
    keyActivities: {
      id: [
        'Pemeriksaan medis umum dan pelayanan kesehatan gigi harian',
        'Sistem pembayaran non-tunai dengan bibit pohon (Non-Cash Health Trade)',
        'Edukasi kesehatan ibu, anak, dan sanitasi air bersih desa',
        'Penetapan status desa non-penebang untuk insentif kesehatan gratis'
      ],
      en: [
        'Daily general medical and dental care for forest communities',
        'Non-cash bartering using native tree saplings for medical fees',
        'Maternal & child health education and clean water sanitation',
        'Village green-status agreements earning up to 70% care discounts'
      ]
    },
    impactStat: '14.250+',
    impactLabel: {
      id: 'Konsultasi & Layanan Medis',
      en: 'Medical Consultations Provided'
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'orangutan-habitat',
    title: {
      id: 'Perlindungan Hutan & Orangutan Tapanuli',
      en: 'Tapanuli Orangutan & Forest Guardians'
    },
    category: 'conservation',
    summary: {
      id: 'Patroli hutan berbasis masyarakat untuk menjaga 141.749 hektar hutan primer Batang Toru dari jerat, perburuan, dan pembalakan liar.',
      en: 'Community forest patrols protecting 141,749 hectares of primary rainforest from snares, poaching, and illegal logging.'
    },
    fullDescription: {
      id: 'Orangutan Tapanuli (Pongo tapanuliensis) baru diidentifikasi secara ilmiah pada tahun 2017 dan merupakan spesies kera besar paling terancam punah di planet Bumi. Hanya tersisa kurang dari 800 individu di hutan awan Batang Toru. Tim Ranger HePI yang merekrut mantan pembalak kayu lokal aktif memantau sarang orangutan, membersihkan jerat satwa, dan memetakan koridor keanekaragaman hayati.',
      en: 'The Tapanuli Orangutan (Pongo tapanuliensis) was scientifically recognized in 2017 and is the most endangered great ape species on Earth. Fewer than 800 individuals remain in the Batang Toru cloud forest. HePI Rangers—recruiting local ex-loggers—actively monitor ape nests, dismantle snares, and track corridors.'
    },
    keyActivities: {
      id: [
        'Patroli rutin Tim Ranger Hepi dan Pemantauan Kamera Jebak (Camera Traps)',
        'Pembersihan jerat pemburu liar dan patroli batas kawasan konservasi',
        'Edukasi konflik manusia dan satwa liar di pemukiman tepi hutan',
        'Penelitian ekologi pohon pakan Orangutan Tapanuli'
      ],
      en: [
        'Routine HePI Ranger patrols and Camera Trap biodiversity monitoring',
        'Poacher snare dismantling and boundary line protection',
        'Human-wildlife conflict mitigation in edge villages',
        'Ecological studies on Tapanuli Orangutan food plant species'
      ]
    },
    impactStat: '800',
    impactLabel: {
      id: 'Orangutan Tapanuli Tersisa Dilindungi',
      en: 'Remaining Tapanuli Orangutans Guarded'
    },
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'forest-nursery',
    title: {
      id: 'Pembibitan Pohon & Reboisasi Koridor',
      en: 'Community Forest Nursery & Reforestation'
    },
    category: 'livelihoods',
    summary: {
      id: 'Pengelolaan persemaian pohon hutan lokal oleh warga desa untuk merehabilitasi lahan kritis dan koridor satwa Batang Toru.',
      en: 'Local community nurseries cultivating indigenous forest trees to restore degraded corridors and watershed zones.'
    },
    fullDescription: {
      id: 'Melalui program persemaian komunitas, warga diajarkan membudidayakan pohon-pohon asli Hutan Batang Toru seperti Meranti, Kapur, dan pohon buah pakan orangutan. Bibit yang dibesarkan di pekarangan rumah warga menjadi tabungan medis yang dapat ditukar saat berobat di Klinik HePI, sekaligus ditanam di zona reboisasi koridor hutan.',
      en: 'Through community nursery hubs, villagers learn to propagate native Batang Toru timber and fruit trees. These saplings act as living medical savings accounts traded at the clinic, which are then planted to connect fragmented rainforest corridors.'
    },
    keyActivities: {
      id: [
        'Pelatihan teknik pembibitan pohon hutan asli Tapanuli',
        'Penanaman kembali koridor hutan terfragmentasi (Reforestation Drives)',
        'Sistem perbankan bibit pohon medis (Tree-for-Health Bank)',
        'Monitoring tingkat kelangsungan hidup pohon yang telah ditanam'
      ],
      en: [
        'Training in native Tapanuli rainforest tree seed propagation',
        'Reforestation drives targeting fragmented wildlife corridors',
        'Tree-for-Health barter banking system',
        'Post-planting survival rate monitoring and care'
      ]
    },
    impactStat: '85.000+',
    impactLabel: {
      id: 'Bibit Pohon Ditanam Kembali',
      en: 'Saplings Grown & Replanted'
    },
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'community-livelihoods',
    title: {
      id: 'Pemberdayaan Ekonomi Suistainable & Edukasi',
      en: 'Sustainable Livelihoods & Eco-Education'
    },
    category: 'education',
    summary: {
      id: 'Pengembangan mata pencaharian ramah lingkungan seperti pertanian organik, pembuatan kompos, dan kerajinan lokal non-hutan.',
      en: 'Developing eco-friendly livelihoods such as organic farming, composting, and non-timber forest product crafts.'
    },
    fullDescription: {
      id: "Untuk menghentikan ketergantungan pada pembalakan kayu, HePI memfasilitasi kelompok tani organik, pembuatan pupuk bokashi dari limbah pertanian, serta pengolahan hasil kebun seperti kopi dan hasil hutan non-kayu. Anak-anak sekolah diajak dalam klub 'Ksatria Hepi' untuk memahami pentingnya menjaga kesehatan alam sejak dini.",
      en: "To eliminate reliance on timber extraction, HePI supports organic farmer groups, organic composting from agricultural waste, and sustainable agroforestry products like shade-grown coffee. Schoolchildren join the 'HePI Nature Club' to foster environmental stewardship."
    },
    keyActivities: {
      id: [
        'Pendampingan kelompok tani organik dan sekolah lapangan',
        'Pelatihan pembuatan pupuk organik padat dan cair',
        "Program 'Ksatria Hepi' untuk pendidikan lingkungan di sekolah dasar",
        'Dukungan akses pasar untuk produk pertanian ramah konservasi'
      ],
      en: [
        'Organic farmer group mentorship and field schools',
        'Training in solid and liquid organic fertilizer production',
        'HePI Eco-Rangers program for primary school environmental education',
        'Market linkage support for eco-certified agroforestry products'
      ]
    },
    impactStat: '28',
    impactLabel: {
      id: 'Desa Mitratama Dampingan',
      en: 'Partner Rainforest Villages'
    },
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200'
  }
];

export const MEDIA_STORIES: MediaStory[] = [
  {
    id: 'whitley-award-gold',
    title: 'Drg. Hotlin Ompusunggu & HePI Win Prestigious Whitley Gold Award',
    source: 'Whitley Fund for Nature / European Environment Foundation',
    date: '2016 - Present',
    category: 'award',
    excerpt: {
      id: 'Pengakuan dunia internasional atas model inovatif penukaran layanan kesehatan dengan bibit pohon untuk menyelamatkan Orangutan Tapanuli dan Hutan Batang Toru.',
      en: 'Global recognition for the innovative healthcare-for-trees model saving the Tapanuli Orangutan and Batang Toru rainforests.'
    },
    fullStory: {
      id: 'Co-Founder HePI, Drg. Hotlin Ompusunggu, menerima penghargaan Whitley Gold Award yang diserahkan oleh Princess Anne di London. Model inovatif ini membuktikan bahwa pelayanan kesehatan yang terjangkau dapat menjadi kunci utama dalam memberhentikan penebangan hutan liar di Indonesia.',
      en: 'HePI Co-Founder Dr. Hotlin Ompusunggu received the Whitley Gold Award presented by HRH Princess Anne in London. The model proves that affordable healthcare can be the primary trigger to end illegal logging in tropical ecosystems.'
    },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000',
    externalUrl: 'https://yayasanhepi.org/european-environment-foundation/'
  },
  {
    id: 'bbc-interview',
    title: 'BBC Interview: Healing People to Save the World\'s Rarest Great Ape',
    source: 'BBC News & World Service',
    date: 'Feature Coverage',
    category: 'feature',
    excerpt: {
      id: 'Wawancara khusus BBC mengenai bagaimana warga lokal Tapanuli membawa bibit pohon ke klinik sebagai pembayaran perawatan medis gigi dan umum.',
      en: 'Special BBC feature on how local Tapanuli villagers bring tree saplings to the clinic as medical and dental care payments.'
    },
    fullStory: {
      id: 'Dalam liputan khusus BBC, dijelaskan bagaimana gergaji mesin (chainsaw) dapat terhenti berkat sistem diskon kesehatan HePI. Ketika warga menyadari bahwa kesehatan keluarga mereka terjamin dengan menjaga hutan, mereka berinisiatif menjadi benteng pertahanan ekosistem Batang Toru.',
      en: 'In an exclusive BBC feature, journalists documented how chainsaws fall silent thanks to HePI care discounts. When villagers realize family health is linked to rainforest preservation, they turn into active defenders of Batang Toru.'
    },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
    externalUrl: 'https://yayasanhepi.org/bbc-interview-session/'
  },
  {
    id: 'natgeo-feature',
    title: 'National Geographic: Six Animal Activists Saving Exceptional Species',
    source: 'National Geographic',
    date: 'Global Feature',
    category: 'news',
    excerpt: {
      id: 'National Geographic menobatkan gerakan HePI sebagai salah satu dari 6 proyek konservasi paling inspiratif di dunia.',
      en: 'National Geographic highlighted HePI as one of the world\'s 6 most inspiring wildlife conservation projects.'
    },
    fullStory: {
      id: 'Artikel National Geographic menyoroti pendekatan unik HePI yang tidak hanya fokus pada hewan tetapi mengutamakan kesejahteraan manusia. Pendekatan ini terbukti berhasil mempertahankan tutupan hutan primer Batang Toru tempat 800 Orangutan Tapanuli hidup.',
      en: 'National Geographic praised HePI\'s holistic approach that puts community wellbeing first. This human-centered approach successfully preserves the primary canopy hosting ~800 Tapanuli Orangutans.'
    },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
    externalUrl: 'https://yayasanhepi.org/national-geographic/'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'hotlin-ompusunggu',
    name: 'drg. Hotlin Ompusunggu, M.Sc.',
    role: {
      id: 'Pendiri & Direktur Eksekutif Yayasan HEPI',
      en: 'Founder & Executive Director'
    },
    bio: {
      id: 'Dokter gigi dan konservasionis Indonesia peraih Whitley Gold Award (2016). Pelopor pendekatan Planetary Health yang menghubungkan kesehatan medis dengan pelestarian hutan Batang Toru.',
      en: 'Indonesian dentist and conservationist, winner of the Whitley Gold Award (2016). Pioneer of Planetary Health linking healthcare with rainforest conservation.'
    },
    image: '/dr-hotlin.jpg',
    awards: ['Whitley Award 2011', 'Whitley Gold Award 2016', 'EEF Envoy']
  },
  {
    id: 'hepi-team',
    name: 'Tim Healthy Planet Indonesia (HePI)',
    role: {
      id: 'Tim Konservasi, Medis, & Pemberdayaan Masyarakat',
      en: 'Conservation, Medical & Community Team'
    },
    bio: {
      id: 'Tim terpadu HePI yang terdiri dari tenaga medis klinik, ranger patroli hutan Batang Toru, serta pendamping persemaian bibit pohon warga.',
      en: 'Integrated HePI team comprising clinic medical staff, Batang Toru forest rangers, and community nursery facilitators.'
    },
    image: '/hepi-team.jpg'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: {
      id: 'Apa hubungan antara pelayanan kesehatan dan pelestarian hutan di HePI?',
      en: 'What is the connection between healthcare and forest conservation at HePI?'
    },
    answer: {
      id: 'Ketika warga desa di sekitar hutan jatuh sakit tanpa akses biaya pengobatan, penebangan kayu liar sering menjadi satu-satunya jalan pintas untuk mendapatkan uang tunai cepat. HePI menyediakan klinik kesehatan berkualitas di mana warga yang berkomitmen menjaga hutan mendapat diskon berobat dan bisa membayar sisanya menggunakan bibit pohon hutan.',
      en: 'When rainforest villagers get sick without savings, illegal logging is often their only emergency source of cash. HePI provides high-quality healthcare where non-logging families receive deep discounts and pay remaining fees using native tree saplings.'
    }
  },
  {
    id: 'faq-2',
    category: 'healthcare',
    question: {
      id: 'Bagaimana cara warga membayar pengobatan dengan bibit pohon?',
      en: 'How do villagers pay for medical care with tree seedlings?'
    },
    answer: {
      id: 'Warga mengumpulkan biji dan merawat bibit pohon lokal (seperti Meranti, Kapur, Durian Hutan) di pekarangan rumah mereka. Saat membutuhkan pemeriksaan atau pengobatan medis, bibit pohon ditakar nilainya oleh tim HePI dan diterima sebagai alat pembayaran sah.',
      en: 'Villagers collect seeds and nurture indigenous tree saplings in home nurseries. During clinical visits, saplings are evaluated and accepted as valid non-cash currency for treatment.'
    }
  },
  {
    id: 'faq-3',
    category: 'conservation',
    question: {
      id: 'Mengapa Ekosistem Batang Toru sangat penting?',
      en: 'Why is the Batang Toru Ecosystem so critical?'
    },
    answer: {
      id: 'Batang Toru seluas 141.749 ha adalah satu-satunya rumah bagi Orangutan Tapanuli (Pongo tapanuliensis) di dunia. Dengan populasi kurang dari 800 ekor, spesies ini sangat rentan punah jika hutannya terfragmentasi.',
      en: 'Batang Toru (141,749 ha) is the sole remaining habitat of the Tapanuli Orangutan on Earth. With fewer than 800 individuals, any habitat loss threatens the entire species with extinction.'
    }
  },
  {
    id: 'faq-4',
    category: 'donation',
    question: {
      id: 'Ke mana dana donasi saya disalurkan?',
      en: 'Where does my donation go?'
    },
    answer: {
      id: '100% donasi digunakan untuk mensubsidi obat-obatan di klinik desa, menggaji ranger patroli lokal (mantan pembalak), pemeliharaan persemaian bibit pohon, dan peralatan laboratorium medis klinik.',
      en: '100% of donations directly subsidize clinic medicine, compensate local forest rangers, maintain tree nursery hubs, and equip village health labs.'
    }
  }
];

export const ANNUAL_REPORTS: AnnualReport[] = [
  {
    id: 'ar-2025',
    year: '2025',
    title: {
      id: 'Laporan Tahunan & Dampak Ekosistem Batang Toru 2025',
      en: '2025 Annual Impact & Batang Toru Ecosystem Report'
    },
    downloadSize: '4.2 MB PDF',
    highlights: {
      id: [
        '3.200 pasien berobat dengan barter bibit pohon',
        '18.500 bibit dipindahkan ke area reboisasi koridor',
        'Nol insiden jerat pemburu liar di zona patroli utama'
      ],
      en: [
        '3,200 patients treated via tree sapling trade',
        '18,500 saplings transplanted to corridor restoration zones',
        'Zero active poaching snares in primary patrol sectors'
      ]
    }
  },
  {
    id: 'ar-2024',
    year: '2024',
    title: {
      id: 'Laporan Transparansi Keuangan & Konservasi 2024',
      en: '2024 Financial Transparency & Conservation Report'
    },
    downloadSize: '3.8 MB PDF',
    highlights: {
      id: [
        '2.900 konsultasi gigi dan medis umum',
        'Penambahan 4 desa mitra non-penebang baru'
      ],
      en: [
        '2,900 dental and primary medical consultations',
        'Added 4 new partner green-status villages'
      ]
    }
  }
];
