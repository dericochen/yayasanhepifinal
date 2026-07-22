import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory logs for contact & donations
const contactSubmissions: any[] = [];
const newsletterSubscribers: string[] = [];
const donationLogs: any[] = [];

// API Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    app: 'Yayasan Healthy Planet Indonesia (HePI)',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ success: false, error: 'Name, email, and message are required' });
    return;
  }

  const newContact = {
    id: 'CNT-' + Date.now(),
    name,
    email,
    phone: phone || '-',
    subject: subject || 'general',
    message,
    submittedAt: new Date().toISOString()
  };

  contactSubmissions.push(newContact);
  console.log('[HePI Contact Form Submission]:', newContact);

  res.json({
    success: true,
    message: 'Message received successfully by HePI Foundation.',
    data: newContact
  });
});

app.post('/api/newsletter', (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    res.status(400).json({ success: false, error: 'Valid email is required' });
    return;
  }

  if (!newsletterSubscribers.includes(email)) {
    newsletterSubscribers.push(email);
  }

  res.json({
    success: true,
    message: 'Subscribed to HePI Impact newsletter.'
  });
});

app.post('/api/donations/record', (req: Request, res: Response) => {
  const { donorName, donorEmail, amount, saplingsCount, frequency, paymentMethod } = req.body;
  const newDonation = {
    refId: 'HEPI-' + Math.floor(100000 + Math.random() * 900000),
    donorName,
    donorEmail,
    amount: amount || 0,
    saplingsCount: saplingsCount || 0,
    frequency: frequency || 'once',
    paymentMethod: paymentMethod || 'qris',
    createdAt: new Date().toISOString()
  };

  donationLogs.push(newDonation);
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
