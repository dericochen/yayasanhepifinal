import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10kb' }));

// Basic Security Headers
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Simple In-Memory Rate Limiter for POST requests to prevent DDOS / spam
const rateLimitMap = new Map<string, { count: number; firstRequestTime: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_POST_REQUESTS = 20; // max 20 POST requests per IP per 15 minutes

const postRateLimiter = (req: Request, res: Response, next: NextFunction) => {
  const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
  const now = Date.now();

  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return next();
  }

  if (now - record.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    // Reset window
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return next();
  }

  record.count += 1;
  if (record.count > MAX_POST_REQUESTS) {
    res.status(429).json({
      success: false,
      error: 'Terlalu banyak permintaan. Silakan coba lagi dalam 15 menit. (Too many requests, please try again in 15 minutes.)'
    });
    return;
  }

  next();
};

// Apply Rate Limiter to all POST API endpoints
app.use('/api/', (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'POST') {
    return postRateLimiter(req, res, next);
  }
  next();
});

// Helper for Email Validation
function isValidEmail(email: string): boolean {
  if (typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim()) && email.length <= 120;
}

// Helper to sanitize text input
function sanitizeText(str: any, maxLen = 500): string {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, maxLen).replace(/<[^>]*>/g, '');
}

// In-memory logs for contact & donations with initial realistic seed data
const contactSubmissions: any[] = [
  {
    id: 'CNT-1712001',
    name: 'Dr. Maria Siregar',
    email: 'maria.siregar@gmail.com',
    phone: '+6281234567890',
    subject: 'volunteer',
    message: 'Saya dokter umum dan berminat bergabung sebagai relawan klinik kesehatan di Batang Toru untuk periode bulan depan.',
    submittedAt: new Date(Date.now() - 3600000 * 24 * 3).toISOString()
  },
  {
    id: 'CNT-1712002',
    name: 'Budi Hartono (BINUS)',
    email: 'budi.hartono@binus.ac.id',
    phone: '+6281987654321',
    subject: 'research',
    message: 'Proposal riset pengabdian masyarakat dari BINUS University untuk pemetaan bibit pohon kanopi berbasis GIS di Batang Toru.',
    submittedAt: new Date(Date.now() - 3600000 * 24 * 7).toISOString()
  }
];

const newsletterSubscribers: string[] = [
  'support@yayasanhepi.org',
  'volunteer@batangtoru.org'
];

const donationLogs: any[] = [
  {
    refId: 'HEPI-842910',
    donorName: 'Anindya Kusuma',
    donorEmail: 'anindya.k@gmail.com',
    donorPhone: '+6281122334455',
    donorMessage: 'Semoga Hutan Batang Toru dan Orangutan Tapanuli selalu lestari.',
    program: 'Sponsor Bibit Pohon',
    package: '100 Bibit Meranti & Kapur',
    amount: 100000,
    saplingsCount: 100,
    frequency: 'monthly',
    paymentMethod: 'bank',
    status: 'completed',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    refId: 'HEPI-619204',
    donorName: 'Dr. Hendra Wijaya',
    donorEmail: 'h.wijaya@outlook.com',
    donorPhone: '+6281555667788',
    donorMessage: 'Dukungan untuk paket ternak ayam 5 betina keluarga mantan pembalak.',
    program: 'Paket Ternak Dinamis',
    package: 'Paket Unggas 5 Betina (Ayam Petelur)',
    amount: 350000,
    saplingsCount: 350,
    frequency: 'once',
    paymentMethod: 'bank',
    status: 'completed',
    createdAt: new Date(Date.now() - 3600000 * 22).toISOString()
  },
  {
    refId: 'HEPI-309112',
    donorName: 'Siti Rahmawati',
    donorEmail: 'siti.rahma@yahoo.com',
    donorPhone: '+6281777889900',
    donorMessage: 'Donasi bulanan rutin untuk klinik satelit dan obat warga.',
    program: 'Barter Medis & Bibit',
    package: '500 Bibit Pohon Kanopi',
    amount: 500000,
    saplingsCount: 500,
    frequency: 'monthly',
    paymentMethod: 'bank',
    status: 'completed',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
  },
  {
    refId: 'HEPI-941823',
    donorName: 'Bambang Pratama',
    donorEmail: 'bambang.p@corporate.id',
    donorPhone: '+6281333445566',
    donorMessage: 'CSR pribadi untuk bibit pohon durian hutan.',
    program: 'Sponsor Bibit Pohon',
    package: '250 Bibit Durian Hutan',
    amount: 250000,
    saplingsCount: 250,
    frequency: 'once',
    paymentMethod: 'bank',
    status: 'completed',
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString()
  },
  {
    refId: 'HEPI-128904',
    donorName: 'Dewi Lestari',
    donorEmail: 'dewi.lestari@gmail.com',
    donorPhone: '+6281999001122',
    donorMessage: 'Untuk patroli ranger penjaga Orangutan Tapanuli.',
    program: 'Patroli SMART Ranger',
    package: 'Dukungan Logistik Patroli',
    amount: 1000000,
    saplingsCount: 1000,
    frequency: 'once',
    paymentMethod: 'bank',
    status: 'completed',
    createdAt: new Date(Date.now() - 3600000 * 120).toISOString()
  }
];

// API Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    app: 'Yayasan Healthy Planet Indonesia (HePI)',
    timestamp: new Date().toISOString()
  });
});

// Admin Transaction & Reporting APIs
app.get('/api/admin/transactions', (req: Request, res: Response) => {
  const { search, method, frequency, status, sortBy, sortOrder } = req.query;
  
  let results = [...donationLogs];

  // Search filter
  if (typeof search === 'string' && search.trim() !== '') {
    const q = search.trim().toLowerCase();
    results = results.filter((item) => 
      item.refId.toLowerCase().includes(q) ||
      item.donorName.toLowerCase().includes(q) ||
      item.donorEmail.toLowerCase().includes(q) ||
      (item.program && item.program.toLowerCase().includes(q))
    );
  }

  // Method filter
  if (typeof method === 'string' && method !== 'all') {
    results = results.filter((item) => item.paymentMethod === method);
  }

  // Frequency filter
  if (typeof frequency === 'string' && frequency !== 'all') {
    results = results.filter((item) => item.frequency === frequency);
  }

  // Status filter
  if (typeof status === 'string' && status !== 'all') {
    results = results.filter((item) => item.status === status);
  }

  // Sorting
  results.sort((a, b) => {
    if (sortBy === 'amount') {
      return sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
    }
    // Default sort by date
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const totalAmount = results.reduce((sum, item) => sum + (item.amount || 0), 0);
  const totalSaplings = results.reduce((sum, item) => sum + (item.saplingsCount || 0), 0);

  res.json({
    success: true,
    totalCount: results.length,
    summary: {
      totalAmount,
      totalSaplings,
      count: results.length
    },
    data: results
  });
});

app.get('/api/admin/contacts', (req: Request, res: Response) => {
  res.json({
    success: true,
    count: contactSubmissions.length,
    data: contactSubmissions
  });
});

app.get('/api/admin/subscribers', (req: Request, res: Response) => {
  res.json({
    success: true,
    count: newsletterSubscribers.length,
    data: newsletterSubscribers
  });
});

app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body || {};

  const cleanName = sanitizeText(name, 100);
  const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
  const cleanPhone = sanitizeText(phone, 30);
  const cleanSubject = sanitizeText(subject, 50);
  const cleanMessage = sanitizeText(message, 2000);

  if (!cleanName || cleanName.length < 2) {
    res.status(400).json({ success: false, error: 'Nama wajib diisi minimal 2 karakter.' });
    return;
  }

  if (!isValidEmail(cleanEmail)) {
    res.status(400).json({ success: false, error: 'Format email tidak valid.' });
    return;
  }

  if (!cleanMessage || cleanMessage.length < 5) {
    res.status(400).json({ success: false, error: 'Pesan wajib diisi minimal 5 karakter.' });
    return;
  }

  const newContact = {
    id: 'CNT-' + Date.now(),
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone || '-',
    subject: cleanSubject || 'general',
    message: cleanMessage,
    submittedAt: new Date().toISOString()
  };

  contactSubmissions.push(newContact);
  console.log('[HePI Contact Form Submission]:', newContact);

  res.json({
    success: true,
    message: 'Pesan berhasil diterima oleh Yayasan HePI.',
    data: newContact
  });
});

app.post('/api/newsletter', (req: Request, res: Response) => {
  const { email } = req.body || {};
  const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';

  if (!isValidEmail(cleanEmail)) {
    res.status(400).json({ success: false, error: 'Alamat email tidak valid.' });
    return;
  }

  if (!newsletterSubscribers.includes(cleanEmail)) {
    newsletterSubscribers.push(cleanEmail);
  }

  res.json({
    success: true,
    message: 'Berhasil berlangganan buletin dampak HePI.'
  });
});

app.post('/api/donations/record', (req: Request, res: Response) => {
  const { donorName, donorEmail, donorPhone, donorMessage, amount, saplingsCount, frequency, paymentMethod } = req.body || {};

  const cleanName = sanitizeText(donorName, 100);
  const cleanEmail = typeof donorEmail === 'string' ? donorEmail.trim().toLowerCase() : '';
  const cleanPhone = sanitizeText(donorPhone, 30);
  const cleanMessage = sanitizeText(donorMessage, 500);

  const numAmount = Number(amount);
  const numSaplings = Number(saplingsCount);

  if (!cleanName || cleanName.length < 2) {
    res.status(400).json({ success: false, error: 'Nama donatur wajib diisi (minimal 2 karakter).' });
    return;
  }

  if (!isValidEmail(cleanEmail)) {
    res.status(400).json({ success: false, error: 'Format email donatur tidak valid.' });
    return;
  }

  if (isNaN(numAmount) || numAmount < 1000 || numAmount > 100000000) {
    res.status(400).json({ success: false, error: 'Nominal donasi harus antara Rp 1.000 dan Rp 100.000.000.' });
    return;
  }

  const validMethods = ['bank', 'qris', 'cc'];
  const cleanPaymentMethod = validMethods.includes(paymentMethod) ? paymentMethod : 'bank';

  const validFreq = ['once', 'monthly'];
  const cleanFreq = validFreq.includes(frequency) ? frequency : 'once';

  const newDonation = {
    refId: 'HEPI-' + Math.floor(100000 + Math.random() * 900000),
    donorName: cleanName,
    donorEmail: cleanEmail,
    donorPhone: cleanPhone,
    donorMessage: cleanMessage,
    amount: numAmount,
    saplingsCount: isNaN(numSaplings) ? Math.floor(numAmount / 1000) : numSaplings,
    frequency: cleanFreq,
    paymentMethod: cleanPaymentMethod,
    createdAt: new Date().toISOString()
  };

  donationLogs.push(newDonation);
  console.log('[HePI Donation Logged]:', newDonation);

  res.json({ success: true, data: newDonation });
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[HePI Application Server running on http://0.0.0.0:${PORT}]`);
  });
}

startServer();
