import React, { useState } from 'react';
import { Language } from '../types';
import { HEPI_INFO } from '../data/hepiData';
import { 
  HeartHandshake, 
  X, 
  Copy, 
  Check, 
  CreditCard, 
  QrCode, 
  Building2, 
  Sprout, 
  ShieldCheck, 
  Download,
  Sparkles,
  Heart
} from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  prefilledSaplings?: number;
  prefilledAmount?: number;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  lang,
  prefilledSaplings,
  prefilledAmount
}) => {
  if (!isOpen) return null;
  const isId = lang === 'id';

  // Preset Amounts (1 Pohon = Rp 1.000)
  const PRESETS = [
    { amount: 10000, saplings: 10, label: isId ? '10 Pohon (Rp 10 rb)' : '10 Trees' },
    { amount: 50000, saplings: 50, label: isId ? '50 Pohon (Rp 50 rb)' : '50 Trees' },
    { amount: 100000, saplings: 100, label: isId ? '100 Pohon (Rp 100 rb) ✨' : '100 Trees ✨' },
    { amount: 250000, saplings: 250, label: isId ? '250 Pohon (Rp 250 rb)' : '250 Trees' },
    { amount: 500000, saplings: 500, label: isId ? '500 Pohon (Rp 500 rb)' : '500 Trees' },
    { amount: 1000000, saplings: 1000, label: isId ? '1.000 Pohon (Rp 1 jt)' : '1,000 Trees' }
  ];

  // Form State
  const [amount, setAmount] = useState<number>(prefilledAmount || 100000);
  const [customAmountText, setCustomAmountText] = useState<string>('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [paymentMethod, setPaymentMethod] = useState<'qris' | 'bank' | 'cc'>('qris');
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  // Donor Details
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [transactionRef, setTransactionRef] = useState('');

  // 1 Pohon = Rp 1.000
  const saplingsEquivalent = Math.max(1, Math.floor(amount / 1000));

  const handlePresetSelect = (amt: number) => {
    setAmount(amt);
    setCustomAmountText('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value.replace(/\D/g, ''), 10) || 0;
    setCustomAmountText(e.target.value);
    setAmount(val);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(id);
    setTimeout(() => setCopiedBank(null), 2000);
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail) return;

    // Generate random mock transaction ID
    const ref = 'HEPI-' + Math.floor(100000 + Math.random() * 900000);
    setTransactionRef(ref);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-[28px] max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#F1F3F0] hover:bg-[#EBEBE8] text-[#1A1A1A] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex p-3 rounded-2xl bg-[#2D5A27] text-white shadow-2xs">
                <HeartHandshake className="w-8 h-8 text-emerald-200" />
              </div>
              <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif">
                {isId ? 'Donasi & Sponsori Bibit Pohon' : 'Donate & Sponsor Tree Saplings'}
              </h3>
              <p className="text-xs text-[#666666]">
                {isId 
                  ? 'Yayasan Healthy Planet Indonesia (HePI) — Menjaga Batang Toru & Kesehatan Warga' 
                  : 'Healthy Planet Indonesia Foundation — Guarding Batang Toru & Community Care'}
              </p>
            </div>

            <form onSubmit={handleSubmitDonation} className="space-y-5">
              
              {/* Frequency Toggle */}
              <div className="flex bg-[#F1F3F0] p-1 rounded-full border border-[#EBEBE8]">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${
                    frequency === 'once' ? 'bg-[#2D5A27] text-white shadow-2xs' : 'text-[#666666]'
                  }`}
                >
                  {isId ? 'Donasi Sekali' : 'One-Time Donation'}
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${
                    frequency === 'monthly' ? 'bg-[#2D5A27] text-white shadow-2xs' : 'text-[#666666]'
                  }`}
                >
                  {isId ? 'Donasi Rutin Bulanan 💚' : 'Monthly Pledge 💚'}
                </button>
              </div>

              {/* Amount Selection Presets */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#1A1A1A] tracking-wider mb-2">
                  {isId ? 'Pilih Nominal Sponsor' : 'Select Sponsorship Amount'}
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {PRESETS.map((p) => (
                    <button
                      key={p.amount}
                      type="button"
                      onClick={() => handlePresetSelect(p.amount)}
                      className={`p-3 rounded-2xl text-left border-2 transition-all ${
                        amount === p.amount && !customAmountText
                          ? 'border-[#2D5A27] bg-[#2D5A27]/5 ring-2 ring-[#2D5A27]/20'
                          : 'border-[#EBEBE8] bg-white hover:border-[#2D5A27]/40'
                      }`}
                    >
                      <div className="text-sm font-bold text-[#1A1A1A]">
                        Rp {p.amount.toLocaleString('id-ID')}
                      </div>
                      <div className="text-[11px] text-[#2D5A27] font-semibold flex items-center gap-1 mt-0.5">
                        <Sprout className="w-3 h-3 text-[#2D5A27]" /> {p.label}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount Input */}
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder={isId ? 'Atau masukkan nominal khusus (Rp)' : 'Or custom amount (Rp)'}
                    value={customAmountText}
                    onChange={handleCustomChange}
                    className="w-full px-4 py-2.5 rounded-full border border-[#EBEBE8] text-sm font-medium focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none"
                  />
                </div>
              </div>

              {/* Saplings Impact Conversion Box */}
              <div className="p-3.5 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] flex items-center gap-3 text-xs text-[#1A1A1A]">
                <Sprout className="w-6 h-6 text-[#2D5A27] shrink-0" />
                <div>
                  <span className="font-bold text-[#2D5A27]">
                    {isId ? 'Dampak Donasi Anda:' : 'Your Donation Impact:'}
                  </span>{' '}
                  {isId 
                    ? `Setara dengan menanam ~${saplingsEquivalent} bibit pohon asli Hutan Batang Toru & mensubsidi obat klinik.` 
                    : `Equivalent to planting ~${saplingsEquivalent} native tree saplings & subsidizing clinic meds.`}
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#1A1A1A] tracking-wider mb-2">
                  {isId ? 'Metode Pembayaran' : 'Payment Method'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('qris')}
                    className={`py-2.5 px-3 rounded-full border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'qris' ? 'border-[#2D5A27] bg-[#2D5A27] text-white' : 'border-[#EBEBE8] text-[#666666]'
                    }`}
                  >
                    <QrCode className="w-4 h-4" /> QRIS Instant
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`py-2.5 px-3 rounded-full border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'bank' ? 'border-[#2D5A27] bg-[#2D5A27] text-white' : 'border-[#EBEBE8] text-[#666666]'
                    }`}
                  >
                    <Building2 className="w-4 h-4" /> Transfer Bank
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cc')}
                    className={`py-2.5 px-3 rounded-full border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'cc' ? 'border-[#2D5A27] bg-[#2D5A27] text-white' : 'border-[#EBEBE8] text-[#666666]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" /> Kartu / Visa
                  </button>
                </div>
              </div>

              {/* Payment Display Instructions */}
              {paymentMethod === 'qris' && (
                <div className="p-4 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] text-center space-y-2">
                  <div className="text-xs font-bold text-[#1A1A1A]">Scan Kode QRIS (GoPay/OVO/ShopeePay/BCA Mobile)</div>
                  <div className="w-36 h-36 bg-white mx-auto p-2 rounded-xl border border-[#EBEBE8] flex items-center justify-center shadow-2xs">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://yayasanhepi.org/donate" 
                      alt="QRIS HePI" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-[11px] text-[#666666]">
                    a.n. <strong>Yayasan Healthy Planet Indonesia</strong>
                  </div>
                </div>
              )}

              {paymentMethod === 'bank' && (
                <div className="space-y-2 text-xs">
                  {HEPI_INFO.contact.bankAccounts.map((acc) => (
                    <div key={acc.accountNumber} className="p-3 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] flex items-center justify-between">
                      <div>
                        <div className="font-bold text-[#1A1A1A]">{acc.bank}</div>
                        <div className="font-mono text-sm text-[#2D5A27] font-extrabold">{acc.accountNumber}</div>
                        <div className="text-[11px] text-[#666666]">a.n. {acc.accountName}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(acc.accountNumber, acc.accountNumber)}
                        className="p-2 rounded-full bg-white border border-[#EBEBE8] text-[#1A1A1A] hover:bg-[#2D5A27] hover:text-white transition-colors"
                      >
                        {copiedBank === acc.accountNumber ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Donor Contact Details */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder={isId ? 'Nama Lengkap Donatur *' : 'Full Name *'}
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full border border-[#EBEBE8] text-xs font-medium focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder={isId ? 'Email Donatur *' : 'Email Address *'}
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full border border-[#EBEBE8] text-xs font-medium focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder={isId ? 'Pesan / Doa Untuk Batang Toru (Opsional)' : 'Personal Message / Prayer (Optional)'}
                  value={donorMessage}
                  onChange={(e) => setDonorMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-full border border-[#EBEBE8] text-xs font-medium focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none"
                />
              </div>

              {/* Actions: Cancel & Submit */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#EBEBE8] bg-[#F1F3F0] hover:bg-[#EBEBE8] text-[#1A1A1A] font-semibold text-sm transition-colors text-center"
                >
                  {isId ? 'Batal' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="flex-1 w-full py-3.5 px-4 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-bold text-sm shadow-2xs transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5 text-emerald-200 fill-current" />
                  <span>
                    {isId 
                      ? `Konfirmasi Donasi Rp ${amount.toLocaleString('id-ID')}` 
                      : `Confirm Donation Rp ${amount.toLocaleString('id-ID')}`}
                  </span>
                </button>
              </div>

            </form>
          </>
        ) : (
          /* Success Receipt Card */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#2D5A27] text-white flex items-center justify-center mx-auto shadow-2xs">
              <Check className="w-8 h-8 text-emerald-200 stroke-3" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#2D5A27] uppercase tracking-wider">
                {isId ? 'Terima Kasih, Donatur!' : 'Thank You, Donor!'}
              </span>
              <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif mt-1">
                {isId ? 'Konfirmasi Donasi Berhasil' : 'Donation Confirmed'}
              </h3>
              <p className="text-xs text-[#666666] mt-1">
                Ref ID: <span className="font-mono font-bold text-[#1A1A1A]">{transactionRef}</span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#666666]">Donatur:</span>
                <span className="font-bold text-[#1A1A1A]">{donorName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666]">Nominal:</span>
                <span className="font-bold text-[#2D5A27]">Rp {amount.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666]">Estimasi Bibit Pohon:</span>
                <span className="font-bold text-[#2D5A27]">~{saplingsEquivalent} Bibit Meranti/Kapur</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666]">Frekuensi:</span>
                <span className="font-semibold text-[#1A1A1A]">{frequency === 'monthly' ? 'Rutin Bulanan' : 'Sekali Transfer'}</span>
              </div>
            </div>

            <p className="text-xs text-[#666666] leading-relaxed">
              {isId 
                ? 'Kuitansi bukti donasi dan laporan perkembangan bibit pohon di Hutan Batang Toru telah dikirimkan ke email Anda.' 
                : 'A formal donation receipt and tree growth report will be emailed to your inbox.'}
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-bold text-xs"
            >
              {isId ? 'Tutup & Kembali' : 'Close & Return'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
