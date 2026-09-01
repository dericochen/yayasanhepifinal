import { 
  ProgramItem, 
  MediaStory, 
  ImpactMetric, 
  TeamMember, 
  FAQItem, 
  AnnualReport,
  PartnerItem,
  LivestockPackage,
  PartnerVillage
} from '../types';

export const HEPI_INFO = {
  name: 'Yayasan Healthy Planet Indonesia (HePI)',
  tagline: {
    id: 'Menjaga Hutan Batang Toru, Menyehatkan Manusia',
    en: 'Guarding the Batang Toru Rainforest, Healing Humanity'
  },
  mission: {
    id: 'Yayasan Healthy Planet Indonesia (HePI) berdedikasi melestarikan ekosistem hutan hujan Batang Toru—satu-satunya habitat Orangutan Tapanuli di dunia—dengan menyediakan pelayanan kesehatan berkualitas yang dapat diakses melalui barter bibit pohon asli dan program mata pencaharian organik ramah lingkungan.',
    en: 'Yayasan Healthy Planet Indonesia (HePI) is dedicated to preserving the Batang Toru rainforest ecosystem—the only habitat of the Tapanuli Orangutan on Earth—by providing high-quality healthcare accessible via native tree saplings and eco-friendly organic livelihood programs.'
  },
  vision: {
    id: 'Terwujudnya masyarakat sehat dan sejahtera yang hidup berdampingan secara harmonis dengan hutan hujan tropis Batang Toru yang lestari dan terlindungi seutuhnya.',
    en: 'A thriving, healthy community living in harmonious coexistence with a resilient, fully protected Batang Toru rainforest ecosystem.'
  },
  philosophy: {
    id: 'Pendekatan Planetary Health: Kesehatan manusia dan kelestarian alam adalah satu kesatuan yang tidak terpisahkan. Ketika masyarakat memiliki akses kesehatan terjangkau dan ekonomi berkelanjutan, perambahan hutan dan perburuan satwa liar dapat dihentikan secara permanen.',
    en: 'Planetary Health Approach: Human health and natural ecosystem integrity are intrinsically interconnected. When local communities have access to affordable healthcare and sustainable livelihoods, illegal logging and poaching cease naturally.'
  },
  history: {
    id: 'Yayasan Healthy Planet Indonesia (HePI) didirikan oleh drg. Hotlin Ompusunggu bersama tim konservasionis dan dokter pada tahun 2018 di Sumatera Utara. Terinspirasi oleh kesuksesan model ASRI di Kalimantan Barat yang berhasil menurunkan pembalakan liar hingga 90%, HePI mereplikasi inovasi "Kesehatan untuk Konservasi" di Bentang Alam Batang Toru seluas 141.749 hektar.',
    en: 'Yayasan Healthy Planet Indonesia (HePI) was founded by Dr. Hotlin Ompusunggu and a dedicated team of conservationists and physicians in 2018 in North Sumatra. Inspired by the proven ASRI model in West Kalimantan which reduced illegal logging by 90%, HePI replicates the "Healthcare for Conservation" innovation across the 141,749-hectare Batang Toru Landscape.'
  },
  bankAccounts: [
    {
      bank: 'Bank Mandiri',
      number: '1060012891001',
      holder: 'Yayasan Healthy Planet Indonesia',
      branch: 'KCP Medan Katamso',
      swift: 'BMRIIDJA'
    },
    {
      bank: 'Bank Central Asia (BCA)',
      number: '8220991188',
      holder: 'Yayasan Healthy Planet Indonesia',
      branch: 'KCU Medan Diponegoro',
      swift: 'CENAIDJA'
    }
  ],
  contact: {
    address: 'Jl. Sisingamangaraja No. 488, Kelurahan Suka Maju, Kec. Medan Johor, Kota Medan 20146, Sumatera Utara, Indonesia',
    fieldOffice: 'Stasiun Riset & Klinik Lapangan HePI, Kec. Batang Toru, Kab. Tapanuli Selatan, Sumatera Utara',
    email: 'info@yayasanhepi.org',
    partnershipEmail: 'partner@yayasanhepi.org',
    phone: '+62 822-7793-4424',
    instagram: 'https://instagram.com/yayasanhepi',
    facebook: 'https://facebook.com/yayasanhepi'
  }
};

// Official Strategic Partners (including BINUS University, WFN, HIH, PRCF, Pemkab Tapsel, BKSDA, PBNF, OIC)
export const PARTNERS: PartnerItem[] = [
  {
    id: 'binus',
    name: 'BINUS University',
    websiteUrl: 'https://binus.ac.id',
    logoText: 'BINUS UNIVERSITY'
  },
  {
    id: 'whitley',
    name: 'Whitley Fund for Nature',
    websiteUrl: 'https://whitleyaward.org',
    logoText: 'WHITLEY FUND FOR NATURE'
  },
  {
    id: 'hih',
    name: 'Health In Harmony',
    websiteUrl: 'https://healthinharmony.org',
    logoText: 'HEALTH IN HARMONY'
  },
  {
    id: 'prcf',
    name: 'PRCF Indonesia',
    websiteUrl: 'https://prcfindonesia.org',
    logoText: 'PRCF INDONESIA'
  },
  {
    id: 'tapsel',
    name: 'Pemerintah Kabupaten Tapanuli Selatan',
    websiteUrl: 'https://tapselkab.go.id',
    logoText: 'PEMKAB TAPANULI SELATAN'
  },
  {
    id: 'bksda',
    name: 'BKSDA Sumatera Utara (KLHK RI)',
    websiteUrl: 'https://menlhk.go.id',
    logoText: 'BKSDA SUMATERA UTARA'
  },
  {
    id: 'pbnf',
    name: 'Prince Bernhard Nature Fund',
    websiteUrl: 'https://pbnf.nl',
    logoText: 'PRINCE BERNHARD NATURE FUND'
  },
  {
    id: 'oic',
    name: 'Orangutan Information Centre',
    websiteUrl: 'https://orangutancentre.org',
    logoText: 'ORANGUTAN INFORMATION CENTRE'
  }
];

// 9 Flagship Programs in 3x3 Grid
export const PROGRAMS: ProgramItem[] = [
  {
    id: 'planetary-health-clinic',
    title: {
      id: 'Klinik Planetary Health & Barter Bibit',
      en: 'Planetary Health Clinic & Sapling Barter'
    },
    category: 'health',
    summary: {
      id: 'Layanan medis dan gigi komprehensif bagi warga lingkar hutan Batang Toru dengan sistem pembayaran non-tunai menggunakan bibit pohon asli.',
      en: 'Comprehensive medical and dental care for Batang Toru rainforest communities with a non-cash payment system using native saplings.'
    },
    fullDescription: {
      id: 'Klinik HePI memberikan pelayanan dokter umum, dokter gigi, pemeriksaan laboratorium, dan obat-obatan esensial. Pasien dari desa yang berkomitmen menghentikan penebangan liar berhak mendapatkan diskon biaya hingga 70% dan dapat membayar sisa tagihan dengan bibit pohon hasil pembibitan mandiri.',
      en: 'HePI Clinic offers general physicians, dentists, laboratory testing, and essential pharmaceuticals. Patients from villages that commit to zero illegal logging receive up to a 70% healthcare discount and can pay with self-grown native tree saplings.'
    },
    keyActivities: {
      id: [
        'Pemeriksaan dokter umum & poli gigi harian',
        'Sistem barter bibit pohon Meranti & Kapur sebagai biaya berobat',
        'Diskon insentif status hijau desa bebas illegal logging (30%-70%)',
        'Pelayanan posyandu keliling & imunisasi desa terpencil'
      ],
      en: [
        'Daily general medical and dental consultations',
        'Native sapling barter system for medical treatment bills',
        'Incentive discounts for Green Status villages (30%-70%)',
        'Mobile outreach clinic and child immunization in remote settlements'
      ]
    },
    impactStat: '14.250+',
    impactLabel: {
      id: 'Pasien Terlayani Tanpa Beban Finansial',
      en: 'Patients Treated Without Financial Burden'
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tree-nurseries',
    title: {
      id: 'Persemaian Bibit Pohon Asli Batang Toru',
      en: 'Native Batang Toru Tree Nurseries'
    },
    category: 'livelihoods',
    summary: {
      id: 'Pusat pembibitan pohon hutan endemik (Meranti, Kapur, Durian Hutan, Ficus) yang dikelola oleh kelompok tani desa mitra.',
      en: 'Nurseries propagating native canopy and fruit trees managed by partner community farmer groups.'
    },
    fullDescription: {
      id: 'Program persemaian memberdayakan keluarga di lingkar hutan untuk membibitkan pohon-pohon endemik. Bibit yang dipelihara digunakan untuk membayar biaya pengobatan di klinik HePI dan ditanam kembali pada zona terdegradasi untuk memulihkan koridor jelajah Orangutan Tapanuli.',
      en: 'The nursery program empowers rainforest families to propagate native species. Healthy saplings are exchanged for healthcare at the HePI clinic and replanted in degraded areas to restore Tapanuli Orangutan movement corridors.'
    },
    keyActivities: {
      id: [
        'Pelatihan teknik pembibitan pohon langka berkualitas tinggi',
        'Pengumpulan biji pohon liar lestari dari hutan primer',
        'Penyerapan bibit untuk tabungan kesehatan keluarga',
        'Penanaman kembali koridor hutan terfragmentasi seluas 250+ ha'
      ],
      en: [
        'High-quality propagation training for endangered trees',
        'Sustainable wild seed harvesting from primary rainforest canopy',
        'Sapling absorption for family healthcare savings accounts',
        'Corridor reforestation covering 250+ ha of fragmented habitat'
      ]
    },
    impactStat: '128.000+',
    impactLabel: {
      id: 'Bibit Pohon Asli Dihasilkan & Ditanam',
      en: 'Native Saplings Propagated & Replanted'
    },
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'livestock-empowerment',
    title: {
      id: 'Pemberdayaan & Donasi Ternak Ramah Hutan',
      en: 'Eco-Livestock & Poultry Empowerment'
    },
    category: 'livestock',
    summary: {
      id: 'Bantuan paket ayam kampung dan kambing bergulir bagi mantan pembalak liar sebagai sumber protein hewani dan pendapatan alternatif non-deforestasi.',
      en: 'Revolving livestock and chicken packages for former loggers providing animal protein and non-deforestation family income.'
    },
    fullDescription: {
      id: 'Untuk menghentikan ketergantungan ekonomi pada penebangan kayu liar, HePI memberikan paket ternak produktif (ayam kampung 4-5 betina + 1 jantan atau kambing bergulir). Kotoran ternak diolah menjadi pupuk organik untuk kebun bibit, sementara anakan ternak digulirkan ke keluarga tetangga.',
      en: 'To end economic reliance on illegal logging, HePI distributes productive livestock packages (organic chicken 4-5 females + 1 rooster, or revolving goats). Manure is converted into organic compost for tree nurseries, and offspring are passed to neighboring families.'
    },
    keyActivities: {
      id: [
        'Penyaluran paket ayam kampung produktif (4-5 betina + 1 jantan)',
        'Program kambing bergulir antar keluarga kelompok tani',
        'Pelatihan pembuatan pakan ternak mandiri dan kandang higienis',
        'Integrasi kotoran ternak sebagai pupuk organik bokashi kebun bibit'
      ],
      en: [
        'Distribution of organic chicken packages (4-5 hens + 1 rooster)',
        'Revolving goat program passing offspring between farmer households',
        'Training on independent feed production and hygienic husbandry',
        'Integration of manure into bokashi organic compost for nurseries'
      ]
    },
    impactStat: '340+',
    impactLabel: {
      id: 'Keluarga Mandiri Ternak Non-Pembalak',
      en: 'Self-Sustaining Eco-Livestock Households'
    },
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'orangutan-conservation',
    title: {
      id: 'Perlindungan Habitat Orangutan Tapanuli',
      en: 'Tapanuli Orangutan Habitat Guard'
    },
    category: 'conservation',
    summary: {
      id: 'Pemantauan intensif, pemulihan koridor jelajah, dan perlindungan ~800 individu Orangutan Tapanuli (Pongo tapanuliensis) yang paling terancam punah di bumi.',
      en: 'Intensive monitoring, corridor restoration, and habitat defense for the ~800 remaining Tapanuli Orangutans (Pongo tapanuliensis) on Earth.'
    },
    fullDescription: {
      id: 'Orangutan Tapanuli baru diidentifikasi sebagai spesies tersendiri pada tahun 2017 dan kini berstatus Kritis (Critically Endangered). HePI bekerja bersama komunitas lokal memetakan sarang, menanam pohon pakan utama, dan mencegah fragmentasi habitat akibat pembukaan lahan liar.',
      en: 'The Tapanuli Orangutan was recognized as a distinct species in 2017 and is Critically Endangered. HePI works hand-in-hand with forest border communities to map nests, replant key food trees, and halt habitat fragmentation.'
    },
    keyActivities: {
      id: [
        'Sensus sarang dan survei populasi berkala berbasis sains',
        'Penanaman pohon pakan alami (Ficus, Durian Hutan, Litsea)',
        'Edukasi mitigasi konflik manusia-satwa di kebun warga',
        'Penyelamatan satwa dan rehabilitasi habitat terdegradasi'
      ],
      en: [
        'Scientific nest census and periodic population monitoring',
        'Planting native food trees (Ficus, Wild Durian, Litsea)',
        'Human-wildlife conflict mitigation training in border farms',
        'Wildlife rescue support and degraded habitat restoration'
      ]
    },
    impactStat: '~800',
    impactLabel: {
      id: 'Individu Orangutan Tapanuli Dijaga Ketat',
      en: 'Tapanuli Orangutans Actively Protected'
    },
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'forest-rangers',
    title: {
      id: 'Patroli Tim Ranger Hutan Komunitas',
      en: 'Community Forest Ranger Patrols'
    },
    category: 'conservation',
    summary: {
      id: 'Mantan pembalak liar yang kini diberdayakan menjadi penjaga garis depan hutan Batang Toru untuk membersihkan jerat dan mencegah pembalakan ilegal.',
      en: 'Former illegal loggers empowered as frontline guardians of Batang Toru to dismantle snares and prevent illegal encroachments.'
    },
    fullDescription: {
      id: 'Tim Ranger HePI terdiri dari pemuda lokal dan mantan penebang pohon yang telah bertransformasi. Mereka melakukan patroli berjalan kaki di lereng-lereng curam Batang Toru, memetakan keanekaragaman hayati dengan SMART Patrol dan GPS, serta membongkar perangkap satwa.',
      en: 'HePI Forest Rangers are transformed local youths and former loggers. They conduct regular on-foot patrols across rugged Batang Toru terrain, utilizing SMART Patrol and GPS mapping while dismantling illegal animal snares.'
    },
    keyActivities: {
      id: [
        'Patroli darat rutin melintasi 141.749 ha bentang alam Batang Toru',
        'Pembersihan jerat pemburu dan pemantauan kamera jebak',
        'Pencatatan data geospasial jejak satwa langka dilindungi',
        'Sosialisasi persuasif hukum kehutanan ke perambah'
      ],
      en: [
        'Routine foot patrols across 141,749 ha of Batang Toru landscape',
        'Removal of poacher snares and camera trap maintenance',
        'Geospatial logging of endangered wildlife tracks',
        'Community engagement on forest protection regulations'
      ]
    },
    impactStat: '141.749 ha',
    impactLabel: {
      id: 'Wilayah Hutan Diawasi Rutin Bersama Komunitas',
      en: 'Forest Landscape Monitored Regularly'
    },
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'environmental-education',
    title: {
      id: 'Pendidikan Lingkungan & Generasi Hijau HePI',
      en: 'Environmental Education & Youth Stewards'
    },
    category: 'education',
    summary: {
      id: 'Program edukasi konservasi untuk anak-anak sekolah dasar dan pemuda desa agar menumbuhkan rasa bangga dan cinta terhadap hutan Batang Toru.',
      en: 'Conservation education for primary school pupils and village youth nurturing pride and stewardship for the Batang Toru ecosystem.'
    },
    fullDescription: {
      id: 'Melalui kurikulum "Ksatria Hutan Batang Toru", anak-anak diajak menjelajahi hutan, mengenal flora-fauna endemik, belajar membibitkan pohon, dan memahami pentingnya menjaga mata air bersih yang mengalir dari kawasan lindung.',
      en: 'Through the "Batang Toru Forest Guardians" curriculum, children explore local forest trails, discover endemic flora and fauna, practice tree propagation, and learn the value of watershed protection.'
    },
    keyActivities: {
      id: [
        'Kelas alam mingguan di sekolah dasar lingkar hutan',
        'Klub Sahabat Orangutan untuk remaja desa',
        'Penyediaan perpustakaan mini dan buku konservasi anak',
        'Praktek pembuatan kompos dan persemaian pohon mini sekolah'
      ],
      en: [
        'Weekly nature classes in forest-border primary schools',
        'Youth Orangutan Friends Clubs in partner villages',
        'Mini eco-libraries and children conservation storybooks',
        'School organic composting and mini-tree nursery plots'
      ]
    },
    impactStat: '3.800+',
    impactLabel: {
      id: 'Siswa & Generasi Muda Teredukasi',
      en: 'Students & Young Guardians Educated'
    },
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'organic-agriculture',
    title: {
      id: 'Pertanian Organik & Pupuk Bokashi Ramah Hutan',
      en: 'Forest-Friendly Organic Farming & Bokashi'
    },
    category: 'livelihoods',
    summary: {
      id: 'Pendampingan petani untuk beralih dari pestisida kimia ke pupuk kompos bokashi alami demi meningkatkan kesuburan tanah tanpa perlu membuka lahan hutan baru.',
      en: 'Transitioning farmers from chemical pesticides to natural bokashi compost to boost soil yields without clearing forest lands.'
    },
    fullDescription: {
      id: 'Pertanian berpindah dan ketergantungan pupuk kimia mahal sering mendorong warga merambah hutan. HePI melatih kelompok tani mengolah limbah organik, kotoran ternak, dan mikroorganisme lokal (MOL) menjadi pupuk bokashi bernutrisi tinggi yang terbukti melipatgandakan panen kopi dan sayuran.',
      en: 'Shifting cultivation and costly chemicals drive slash-and-burn clearing. HePI trains farmer groups to process agricultural waste and local microorganisms into rich bokashi compost, multiplying organic coffee and vegetable yields.'
    },
    keyActivities: {
      id: [
        'Pembuatan rumah kompos bokashi komunal di desa mitra',
        'Pelatihan budidaya kopi agroforestri di bawah naungan pohon',
        'Sertifikasi organik dan akses pasar hasil bumi lestari',
        'Pengurangan penggunaan pestisida kimia berbahaya hingga 85%'
      ],
      en: [
        'Construction of communal bokashi composting houses',
        'Shade-grown agroforestry coffee cultivation training',
        'Organic quality improvement and sustainable market access',
        'Reduction of hazardous chemical pesticides by up to 85%'
      ]
    },
    impactStat: '45+',
    impactLabel: {
      id: 'Kelompok Tani Organik Aktif Berdaya',
      en: 'Active Eco-Farmer Groups Empowered'
    },
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'maternal-nutrition',
    title: {
      id: 'Dapur Sehat, Gizi Ibu-Anak & Air Bersih',
      en: 'Maternal Nutrition & Clean Water Access'
    },
    category: 'health',
    summary: {
      id: 'Pencegahan stunting balita, penyuluhan gizi keluarga berbasis kebun pekarangan, dan perlindungan sumber mata air hutan alami.',
      en: 'Preventing child stunting, home vegetable garden nutrition training, and safeguarding pristine forest spring water sources.'
    },
    fullDescription: {
      id: 'Kesehatan generasi masa depan Batang Toru bergantung pada asupan gizi seimbang sejak masa kehamilan. HePI menyediakan suplemen mikronutrien, pendampingan laktasi, kebun gizi keluarga, serta pipa gravitasi air bersih dari hulu hutan lindung ke pemukiman.',
      en: 'The future of Batang Toru depends on maternal and child health. HePI provides micronutrient supplements, lactation support, home veggie nutrition gardens, and gravity-fed clean spring water systems.'
    },
    keyActivities: {
      id: [
        'Pemberian makanan tambahan bernutrisi tinggi bagi balita & ibu hamil',
        'Pembangunan instalasi pipa gravitasi air bersih mata air hutan',
        'Kebun sayur pekarangan organik kaya vitamin dan mineral',
        'Pemeriksaan tumbuh kembang anak berkala di posyandu satelit'
      ],
      en: [
        'Nutritional supplementary feeding for toddlers and mothers',
        'Gravity-piped clean spring water infrastructure from forest heads',
        'Home vegetable gardens rich in micronutrients and vitamins',
        'Regular child growth milestone screenings at mobile posts'
      ]
    },
    impactStat: '1.920+',
    impactLabel: {
      id: 'Ibu & Balita Bebas Malnutrisi & Stunting',
      en: 'Mothers & Children Safeguarded From Malnutrition'
    },
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ecological-research',
    title: {
      id: 'Riset Ekologi & Primatologi Batang Toru',
      en: 'Ecological & Primatology Field Research'
    },
    category: 'research',
    summary: {
      id: 'Kolaborasi riset ilmiah bersama universitas mitra untuk mendokumentasikan keanekaragaman hayati hutan awan Batang Toru.',
      en: 'Collaborative scientific field research with partner universities documenting the high-altitude biodiversity of Batang Toru.'
    },
    fullDescription: {
      id: 'Bekerja sama dengan Universitas Sumatera Utara, BINUS, dan para peneliti internasional, HePI memfasilitasi riset genetika satwa langka, studi dinamika karbon hutan hujan, serta pemetaan korelasi antara kesehatan hutan dan derajat kesehatan masyarakat sekitar.',
      en: 'In partnership with USU, BINUS, and international scholars, HePI facilitates scientific research into wildlife genetics, rainforest carbon dynamics, and empirical correlations between forest health and community well-being.'
    },
    keyActivities: {
      id: [
        'Pemasangan dan monitoring 40+ kamera jebak sensor gerak',
        'Studi biomassa dan kapasitas penyerapan karbon pohon hutan',
        'Fasilitasi mahasiswa magang dan peneliti independen',
        'Publikasi jurnal ilmiah internasional bertema Planetary Health'
      ],
      en: [
        'Deployment and monitoring of 40+ motion sensor camera traps',
        'Canopy biomass and forest carbon sink capacity analysis',
        'Facilitation of university student fieldwork and internships',
        'International scientific publications on Planetary Health'
      ]
    },
    impactStat: '18+',
    impactLabel: {
      id: 'Studi Ilmiah & Publikasi Konservasi Terbit',
      en: 'Scientific Field Studies & Publications'
    },
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800'
  }
];

// Dynamic Livestock Donation Packages (Yearly Updateable - 2026 Prices)
export const LIVESTOCK_PACKAGES: LivestockPackage[] = [
  {
    id: 'pkg-chicken-4',
    name: {
      id: 'Paket Ayam Kampung Mandiri (4 Betina + 1 Jantan)',
      en: 'Organic Chicken Starter Pack (4 Hens + 1 Rooster)'
    },
    type: 'chicken',
    optionLabel: {
      id: '4 Ekor Betina + 1 Jantan',
      en: '4 Hens + 1 Rooster'
    },
    femaleCount: 4,
    maleCount: 1,
    priceIdr: 300000,
    updatedYear: 2026,
    description: {
      id: 'Paket starter indukan ayam kampung produktif bersertifikat sehat beserta pakan fermentasi awal dan vaksinasi untuk keluarga mantan pembalak.',
      en: 'Starter pack of healthy, vaccinated productive hens with starter feed for a former illegal logger household.'
    },
    impact: {
      id: 'Menghasilkan ~50 butir telur organik/bulan untuk nutrisi anak & pendapatan telur.',
      en: 'Yields ~50 organic eggs/month for child nutrition & family income.'
    }
  },
  {
    id: 'pkg-chicken-5',
    name: {
      id: 'Paket Ayam Kampung Unggul (5 Betina + 1 Jantan)',
      en: 'Organic Chicken Growth Pack (5 Hens + 1 Rooster)'
    },
    type: 'chicken',
    optionLabel: {
      id: '5 Ekor Betina + 1 Jantan (Rekomendasi)',
      en: '5 Hens + 1 Rooster (Recommended)'
    },
    femaleCount: 5,
    maleCount: 1,
    priceIdr: 350000,
    updatedYear: 2026,
    description: {
      id: 'Paket lengkap 5 ekor betina indukan bertelur tinggi + 1 jantan pejantan tangguh, suplemen jamu alami, dan panduan beternak ramah hutan.',
      en: 'Complete pack of 5 high-yield laying hens + 1 strong rooster with herbal supplements and forest-friendly husbandry guide.'
    },
    impact: {
      id: 'Menghasilkan ~75 butir telur/bulan + 20 anakan/siklus untuk digulirkan ke tetangga.',
      en: 'Yields ~75 eggs/month + 20 chicks/cycle to roll forward to neighbors.'
    }
  },
  {
    id: 'pkg-goat-pair',
    name: {
      id: 'Paket Sepasang Kambing Bergulir (Induk & Jantan)',
      en: 'Revolving Goat Pair (Female & Male Breeders)'
    },
    type: 'goat',
    optionLabel: {
      id: '1 Pasang Kambing Bibit Unggul',
      en: '1 Pair of Breeding Goats'
    },
    femaleCount: 1,
    maleCount: 1,
    priceIdr: 2500000,
    updatedYear: 2026,
    description: {
      id: 'Sepasang kambing lokal unggul tahan penyakit. Anakan pertama wajib diserahkan kepada keluarga lain di desa mitra untuk memperluas manfaat.',
      en: 'A pair of disease-resilient breeding goats. Firstborn offspring is passed forward to another village family.'
    },
    impact: {
      id: 'Menghasilkan 150 kg pupuk kandang/bulan untuk kebun bibit pohon dan tabungan masa depan keluarga.',
      en: 'Produces 150 kg manure/month for tree nurseries and long-term family savings.'
    }
  }
];

// Partner Villages around Batang Toru Forest
export const PARTNER_VILLAGES: PartnerVillage[] = [
  {
    id: 'marancar-godang',
    name: 'Desa Marancar Godang',
    subdistrict: 'Marancar, Tapanuli Selatan',
    households: 240,
    status: 'green',
    nurseriesCount: 4,
    saplingsCollected: 28400,
    hasClinicPost: true,
    hasLivestockGroup: true,
    coordinates: { x: 28, y: 52 }
  },
  {
    id: 'batang-toru-barat',
    name: 'Desa Wek I & Hapesong',
    subdistrict: 'Batang Toru, Tapanuli Selatan',
    households: 380,
    status: 'green',
    nurseriesCount: 6,
    saplingsCollected: 42100,
    hasClinicPost: true,
    hasLivestockGroup: true,
    coordinates: { x: 35, y: 64 }
  },
  {
    id: 'sipirok-parau',
    name: 'Desa Paran Padang & Bulu Mario',
    subdistrict: 'Sipirok, Tapanuli Selatan',
    households: 210,
    status: 'green',
    nurseriesCount: 3,
    saplingsCollected: 19800,
    hasClinicPost: true,
    hasLivestockGroup: true,
    coordinates: { x: 62, y: 38 }
  },
  {
    id: 'angkola-barat',
    name: 'Desa Sitinjak & Sibangkua',
    subdistrict: 'Angkola Barat, Tapanuli Selatan',
    households: 195,
    status: 'yellow',
    nurseriesCount: 2,
    saplingsCollected: 14200,
    hasClinicPost: true,
    hasLivestockGroup: false,
    coordinates: { x: 45, y: 72 }
  },
  {
    id: 'aek-bilah',
    name: 'Desa Silangkitang Dolok',
    subdistrict: 'Aek Bilah, Tapanuli Selatan',
    households: 160,
    status: 'yellow',
    nurseriesCount: 2,
    saplingsCollected: 9500,
    hasClinicPost: false,
    hasLivestockGroup: true,
    coordinates: { x: 74, y: 48 }
  },
  {
    id: 'saipar-dolok-hole',
    name: 'Desa Damparan Hauntas',
    subdistrict: 'Saipar Dolok Hole, Tapanuli Selatan',
    households: 185,
    status: 'green',
    nurseriesCount: 3,
    saplingsCollected: 12600,
    hasClinicPost: true,
    hasLivestockGroup: true,
    coordinates: { x: 68, y: 28 }
  },
  {
    id: 'arse-nauli',
    name: 'Desa Lancat & Nanggar Jati',
    subdistrict: 'Arse, Tapanuli Selatan',
    households: 145,
    status: 'green',
    nurseriesCount: 2,
    saplingsCollected: 8900,
    hasClinicPost: false,
    hasLivestockGroup: true,
    coordinates: { x: 52, y: 22 }
  }
];

// Impact Metrics & Statistics
export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'trees-planted',
    numericValue: 128450,
    suffix: '+',
    label: {
      id: 'Bibit Pohon Hutan Ditanam',
      en: 'Native Saplings Planted'
    },
    description: {
      id: 'Meranti, Kapur, Durian Hutan, dan Beringin hasil bibitan warga.',
      en: 'Native canopy and fruit trees propagated by partner villages.'
    },
    icon: 'Trees'
  },
  {
    id: 'patients-served',
    numericValue: 14280,
    suffix: '+',
    label: {
      id: 'Pasien Berobat Non-Tunai',
      en: 'Non-Cash Patients Treated'
    },
    description: {
      id: 'Mendapatkan akses medis dokter dan gigi dengan barter bibit pohon.',
      en: 'Accessing healthcare and dental care by bartering saplings.'
    },
    icon: 'HeartPulse'
  },
  {
    id: 'orangutan-protected',
    numericValue: 800,
    prefix: '~',
    label: {
      id: 'Orangutan Tapanuli Terlindungi',
      en: 'Tapanuli Orangutans Guarded'
    },
    description: {
      id: 'Seluruh populasi yang tersisa di muka bumi hidup di Batang Toru.',
      en: 'The entire surviving global population living in Batang Toru.'
    },
    icon: 'ShieldCheck'
  },
  {
    id: 'partner-villages',
    numericValue: 28,
    suffix: ' Desa',
    label: {
      id: 'Desa Mitra Konservasi Aktif',
      en: 'Active Partner Villages'
    },
    description: {
      id: 'Berkomitmen menghentikan deforestasi dan membina kelompok tani.',
      en: 'Committed to zero deforestation and active tree nurseries.'
    },
    icon: 'MapPin'
  },
  {
    id: 'carbon-sequestered',
    numericValue: 64200,
    suffix: ' Ton',
    label: {
      id: 'Estimasi Serapan Karbon CO2e',
      en: 'Estimated CO2e Absorbed'
    },
    description: {
      id: 'Diserap oleh zona reboisasi pohon kanopi hutan primer Batang Toru.',
      en: 'Sequestered by restored primary canopy trees in Batang Toru.'
    },
    icon: 'Sprout'
  }
];

// HePI Board and Team (Modeled after ASRI style with high-resolution portraits)
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'hotlin-ompusunggu',
    name: 'drg. Hotlin Ompusunggu',
    type: 'founder',
    role: {
      id: 'Pendiri & Ketua Dewan Pembina Yayasan HEPI',
      en: 'Founder & Chair of Advisory Board'
    },
    bio: {
      id: 'Dokter gigi dan konservasionis Indonesia peraih Whitley Gold Award dari Princess Royal Inggris. Pelopor integrasi layanan kesehatan terjangkau untuk menghentikan pembalakan liar hutan tropis di Indonesia.',
      en: 'Indonesian dentist and conservationist awarded the prestigious Whitley Gold Award by the Princess Royal. Pioneer of affordable healthcare integration to halt tropical rainforest logging in Indonesia.'
    },
    image: 'https://images.unsplash.com/photo-1594824813580-c0813fba3fb2?auto=format&fit=crop&q=80&w=800',
    awards: [
      'Whitley Gold Award 2016 (UK)',
      'Ashoka Global Fellow for Social Entrepreneurship',
      'Tufts University Talloires Winner'
    ]
  },
  {
    id: 'kinari-webb',
    name: 'Dr. Kinari Webb, MD',
    type: 'board',
    role: {
      id: 'Dewan Penasihat Global & Founder Health In Harmony',
      en: 'Global Advisory Board & Founder of Health In Harmony'
    },
    bio: {
      id: 'Dokter medis lulusan Duke University dan penulis buku "Guardians of the Trees". Membimbing riset metodologi Planetary Health dan monitoring dampak deforestasi secara global.',
      en: 'Duke-trained physician and author of "Guardians of the Trees". Guides Planetary Health research methodology and global deforestation impact tracking.'
    },
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dr-monica-sinaga',
    name: 'dr. Monica Sinaga, M.Sc',
    type: 'board',
    role: {
      id: 'Direktur Medis & Kepala Klinik Lapangan HePI',
      en: 'Medical Director & Field Clinic Lead'
    },
    bio: {
      id: 'Dokter spesialis kedokteran tropis dan kesehatan masyarakat yang memimpin tim dokter umum, perawat, dan program posyandu gizi keliling di desa-desa lingkar Batang Toru.',
      en: 'Tropical medicine and public health physician leading general practitioners, nurses, and mobile maternal nutrition outreach in Batang Toru villages.'
    },
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'arifin-harahap',
    name: 'Arifin Harahap, S.Hut',
    type: 'team',
    role: {
      id: 'Manajer Konservasi Hutan & Koordinator Ranger',
      en: 'Forest Conservation Manager & Ranger Coordinator'
    },
    bio: {
      id: 'Rimbawan asli Tapanuli dengan pengalaman 15 tahun menjelajahi belantara Batang Toru. Mengkoordinasikan patroli anti-perburuan dan pemulihan koridor Orangutan Tapanuli.',
      en: 'Tapanuli-born forester with 15 years of field experience in Batang Toru. Coordinates anti-poaching patrols and Tapanuli Orangutan corridor restoration.'
    },
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nurmala-pasaribu',
    name: 'Nurmala Pasaribu, S.P',
    type: 'team',
    role: {
      id: 'Koordinator Pemberdayaan Ternak & Pertanian Organik',
      en: 'Livestock & Organic Farming Coordinator'
    },
    bio: {
      id: 'Ahli agronomi yang mendampingi 45+ kelompok tani dan ibu rumah tangga dalam mengelola paket ayam kampung mandiri, kambing bergulir, dan rumah kompos bokashi.',
      en: 'Agronomist mentoring 45+ farmer groups and housewives in managing organic chicken starter packs, revolving goats, and bokashi composting.'
    },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
  }
];

// Media Stories & Press Releases
export const MEDIA_STORIES: MediaStory[] = [
  {
    id: 'whitley-award-sumatra',
    title: 'Dr. Hotlin Ompusunggu & Inovasi Planetary Health Batang Toru',
    source: 'Whitley Fund for Nature',
    date: '15 Mei 2024',
    category: 'award',
    excerpt: {
      id: 'Pengakuan internasional atas model barter bibit pohon untuk berobat yang terbukti melindungi benteng terakhir Orangutan Tapanuli di Sumatera.',
      en: 'International recognition for the healthcare-for-trees barter model protecting the last stronghold of the Tapanuli Orangutan in Sumatra.'
    },
    fullStory: {
      id: 'Whitley Fund for Nature menyoroti dedikasi drg. Hotlin Ompusunggu dan Yayasan HePI dalam membuktikan bahwa pelayanan kesehatan dasar yang terjangkau merupakan kunci utama untuk mengakhiri perambahan hutan tropis dan memulihkan habitat satwa paling langka di dunia.',
      en: 'The Whitley Fund for Nature highlighted the dedication of Dr. Hotlin Ompusunggu and the HePI Foundation, demonstrating that accessible primary healthcare is key to ending rainforest encroachment and recovering endangered habitats.'
    },
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=800',
    externalUrl: 'https://whitleyaward.org'
  },
  {
    id: 'bbc-batang-toru-feature',
    title: 'BBC News: Healing People to Save the World\'s Rarest Great Ape',
    source: 'BBC News International',
    date: '28 Oktober 2024',
    category: 'feature',
    excerpt: {
      id: 'Liputan mendalam BBC mengenai bagaimana warga desa di Tapanuli Selatan menukar bibit Meranti untuk mendapatkan perawatan medis berkualitas.',
      en: 'In-depth BBC documentary on how villagers in South Tapanuli exchange native Meranti saplings for high-quality medical care.'
    },
    fullStory: {
      id: 'Dalam liputan khusus BBC di Batang Toru, para jurnalis mendokumentasikan senyum warga yang tidak lagi harus menebang pohon demi membayar biaya rumah sakit, melainkan merawat bibit pohon yang menghidupkan kembali kanopi hutan awan.',
      en: 'In a special BBC feature in Batang Toru, journalists documented the smiles of villagers who no longer need to fell trees for emergency medical bills, but instead nurture native saplings that revive the cloud forest canopy.'
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    externalUrl: 'https://bbc.com'
  },
  {
    id: 'livestock-program-launch',
    title: 'Pemberdayaan Ternak Ayam & Kambing Bergulir Mandiri 2026',
    source: 'Kabar Konservasi HePI',
    date: '12 Januari 2026',
    category: 'field',
    excerpt: {
      id: 'Penyaluran 120 paket ayam kampung (4-5 betina) dan 20 pasang kambing bergulir kepada kelompok tani lingkar hutan Desa Marancar dan Sipirok.',
      en: 'Distribution of 120 organic chicken starter packs and 20 revolving goat pairs to farmer groups in Marancar and Sipirok villages.'
    },
    fullStory: {
      id: 'Program ternak mandiri ini melengkapi klinik barter bibit. Dengan memiliki sumber telur dan anakan ternak, keluarga binaan mendapatkan pendapatan harian stabil sehingga tidak ada lagi dorongan ekonomi untuk berburu satwa atau menebang kayu di hutan lindung.',
      en: 'This eco-livestock program complements the tree barter clinic. Providing daily eggs and livestock offspring yields stable household income, permanently removing the economic pressure to hunt or log in protected forests.'
    },
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'binus-hepi-partnership',
    title: 'Kolaborasi BINUS University & HePI: Digitalisasi Tracking Bibit & Kesehatan',
    source: 'Warta Riset & Inovasi',
    date: '04 Februari 2026',
    category: 'news',
    excerpt: {
      id: 'Pengembangan sistem pemetaan geospasial bibit dan rekam medis terintegrasi bersama tim akademisi Universitas Bina Nusantara.',
      en: 'Development of geospatial sapling tracking and integrated electronic medical records in partnership with Bina Nusantara University.'
    },
    fullStory: {
      id: 'BINUS University menerjunkan tim dosen dan mahasiswa dalam program pemberdayaan digital di Batang Toru. Inovasi ini memungkinkan setiap pohon yang ditanam dan setiap paket ternak yang digulirkan terpantau secara transparan dan akuntabel.',
      en: 'BINUS University deployed researchers and students for digital empowerment in Batang Toru. This innovation enables transparent, auditable tracking of every tree planted and every revolving livestock package distributed.'
    },
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  }
];

// Comprehensive FAQs (Positioned directly before Contact)
export const FAQS: FAQItem[] = [
  {
    id: 'faq-hepi-concept',
    category: 'general',
    question: {
      id: 'Apa itu Yayasan HEPI dan apa yang membedakannya dengan yayasan lain?',
      en: 'What is Yayasan HEPI and what makes its approach unique?'
    },
    answer: {
      id: 'Yayasan Healthy Planet Indonesia (HePI) adalah organisasi nirlaba resmi yang mengintegrasikan pelayanan kesehatan terjangkau bagi masyarakat dengan pelestarian hutan hujan tropis Batang Toru—satu-satunya habitat Orangutan Tapanuli di dunia. Kami percaya bahwa untuk menyelamatkan hutan, kita harus terlebih dahulu mendengarkan dan memenuhi kebutuhan dasar masyarakat yang hidup di sekitarnya.',
      en: 'Yayasan Healthy Planet Indonesia (HePI) is an official non-profit integrating accessible healthcare for local communities with the preservation of the Batang Toru rainforest—the sole habitat of the Tapanuli Orangutan. We believe that to save the forest, we must first address the foundational healthcare and livelihood needs of local people.'
    }
  },
  {
    id: 'faq-tree-barter',
    category: 'healthcare',
    question: {
      id: 'Bagaimana cara warga berobat dengan membayar menggunakan bibit pohon?',
      en: 'How do villagers pay for healthcare using native tree saplings?'
    },
    answer: {
      id: 'Warga desa binaan dapat membawa bibit pohon hutan lokal yang sehat (seperti Meranti, Kapur, Durian Hutan, Ficus) yang mereka semaikan di pekarangan rumah ke Klinik HePI. Nilai bibit dihitung setara biaya tindakan medis atau obat-obatan. Bibit yang terkumpul kemudian dirawat di persemaian utama dan ditanam kembali di koridor hutan terdegradasi.',
      en: 'Partner villagers bring healthy native saplings (such as Meranti, Kapur, Wild Durian, Ficus) propagated in their home nurseries to the HePI Clinic. The saplings offset consultation and medicine costs. Collected saplings are cared for at the main nursery and replanted across degraded forest corridors.'
    }
  },
  {
    id: 'faq-livestock-program',
    category: 'livestock',
    question: {
      id: 'Bagaimana sistem donasi paket ternak ayam dan kambing bergulir?',
      en: 'How does the livestock and revolving goat package donation work?'
    },
    answer: {
      id: 'Donatur dapat mendanai paket ayam kampung (pilihan 4 betina atau 5 betina + 1 jantan seharga Rp 300.000 - Rp 350.000) atau paket sepasang kambing bergulir (Rp 2.500.000). Hewan ternak disalurkan kepada mantan pembalak liar yang telah menandatangani komitmen perlindungan hutan. Anakan pertama wajib digulirkan ke keluarga tetangga sehingga manfaatnya terus berlipat ganda.',
      en: 'Donors can fund organic chicken packages (4 or 5 hens + 1 rooster at Rp 300,000 - Rp 350,000) or revolving goat pairs (Rp 2,500,000). Animals are delivered to former loggers committed to forest conservation. Firstborn offspring are passed to neighboring families, creating a continuous multiplier effect.'
    }
  },
  {
    id: 'faq-bank-transfer',
    category: 'donation',
    question: {
      id: 'Bagaimana cara berdonasi dan metode pembayaran apa saja yang tersedia?',
      en: 'How can I donate and what payment methods are available?'
    },
    answer: {
      id: 'Untuk menjamin keamanan, efisiensi, dan verifikasi langsung tanpa potongan pihak ketiga, HePI menerima donasi melalui Transfer Bank Resmi ke rekening Yayasan Healthy Planet Indonesia di Bank Mandiri (1060012891001) dan BCA (8220991188). Bukti transfer dapat dikonfirmasikan melalui form donasi atau email info@yayasanhepi.org.',
      en: 'To ensure maximum security and zero third-party deduction, HePI accepts donations exclusively via Official Bank Transfer to Yayasan Healthy Planet Indonesia at Bank Mandiri (1060012891001) and BCA (8220991188). Transfer receipts can be confirmed via the donation modal or at info@yayasanhepi.org.'
    }
  },
  {
    id: 'faq-tapanuli-orangutan',
    category: 'conservation',
    question: {
      id: 'Mengapa Ekosistem Batang Toru dan Orangutan Tapanuli sangat mendesak dilindungi?',
      en: 'Why is the Batang Toru Ecosystem and Tapanuli Orangutan so critical to protect?'
    },
    answer: {
      id: 'Orangutan Tapanuli (Pongo tapanuliensis) adalah spesies kera besar termuda yang diidentifikasi di dunia (2017) sekaligus yang paling terancam punah dengan populasi kurang dari 800 individu. Mereka HANYA hidup di hutan Batang Toru seluas 141.749 ha. Jika hutan ini terfragmentasi, spesies ini akan punah selamanya.',
      en: 'The Tapanuli Orangutan (Pongo tapanuliensis) is the newest great ape species identified (2017) and the most critically endangered, with fewer than 800 individuals surviving solely in the 141,749 ha Batang Toru forest. If this habitat fragments, the species faces extinction.'
    }
  },
  {
    id: 'faq-volunteering',
    category: 'general',
    question: {
      id: 'Bagaimana cara menjadi relawan medis, peneliti, atau mitra universitas di HePI?',
      en: 'How can I join as a medical volunteer, researcher, or university partner?'
    },
    answer: {
      id: 'Kami membuka kesempatan bagi dokter umum, dokter gigi, perawat, ahli kehutanan, mahasiswa, dan peneliti independen untuk bergabung dalam program relawan berkala. Anda dapat mendaftar langsung melalui formulir kontak di situs ini atau mengirimkan proposal ke partner@yayasanhepi.org.',
      en: 'We welcome physicians, dentists, nurses, foresters, students, and independent researchers to join our periodic volunteer programs. You can apply directly through the contact form on this site or submit a proposal to partner@yayasanhepi.org.'
    }
  }
];

// Audited Financial and Annual Reports
export const ANNUAL_REPORTS: AnnualReport[] = [
  {
    id: 'rep-2025',
    year: '2025',
    title: {
      id: 'Laporan Dampak Tahunan & Audit Keuangan HePI 2025',
      en: 'HePI 2025 Annual Impact & Audited Financial Report'
    },
    downloadSize: '4.8 MB (PDF)',
    highlights: {
      id: [
        '14.250+ pasien dilayani melalui sistem barter bibit',
        '128.000+ bibit pohon endemik ditanam di koridor Batang Toru',
        'Opini Wajar Tanpa Pengecualian (WTP) oleh Auditor Independen',
        'Efisiensi program: 88% dana langsung ke program lapangan'
      ],
      en: [
        '14,250+ patients treated via sapling barter system',
        '128,000+ native tree saplings replanted across corridors',
        'Unqualified Clean Audit Opinion by Independent Auditor',
        'Program efficiency: 88% of funds channeled directly to field programs'
      ]
    }
  },
  {
    id: 'rep-2024',
    year: '2024',
    title: {
      id: 'Laporan Tahunan Konservasi Batang Toru & Kesehatan 2024',
      en: 'HePI 2024 Batang Toru Conservation & Health Report'
    },
    downloadSize: '3.9 MB (PDF)',
    highlights: {
      id: [
        'Pembukaan 6 stasiun pembibitan pohon komunitas baru',
        'Nol insiden perburuan di sektor patroli inti ranger',
        'Survei populasi Orangutan Tapanuli bersama universitas mitra',
        'Pengurangan pembalakan liar sebesar 82% di 18 desa hijau'
      ],
      en: [
        'Establishment of 6 new community tree nursery hubs',
        'Zero poaching incidents recorded in core ranger sectors',
        'Tapanuli Orangutan population census with partner universities',
        '82% reduction in illegal logging across 18 green villages'
      ]
    }
  }
];
