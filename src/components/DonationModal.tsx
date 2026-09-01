import React, { useState } from 'react';
import { Language } from '../types';
import { HEPI_INFO } from '../data/hepiData';
import { 
  HeartHandshake, 
  X, 
  Copy, 
  Check, 
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
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  // Donor Details
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [transactionRef, setTransactionRef] = useState('');

  // 1 Pohon = Rp 1.000
  const saplingsEquivalent = Math.max(1, Math.floor(amount / 1000));

  const handlePresetSelect = (amt: number) => {
    setAmount(amt);
    setCustomAmountText('');
    setErrorMsg('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value.replace(/\D/g, ''), 10) || 0;
    setCustomAmountText(e.target.value);
    setAmount(val);
    setErrorMsg('');
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(id);
    setTimeout(() => setCopiedBank(null), 2000);
  };

  const handleSubmitDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Input validations
    const trimmedName = donorName.trim();
    const trimmedEmail = donorEmail.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMsg(isId ? 'Nama donatur minimal 2 karakter.' : 'Donor name must be at least 2 characters.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMsg(isId ? 'Format email tidak valid.' : 'Invalid email format.');
      return;
    }

    if (!amount || amount < 1000) {
      setErrorMsg(isId ? 'Jumlah donasi minimal Rp 1.000.' : 'Minimum donation amount is Rp 1,000.');
      return;
    }

    if (amount > 100000000) {
      setErrorMsg(isId ? 'Jumlah donasi melebihi batas maksimum (Rp 100 Juta).' : 'Donation amount exceeds maximum limit (Rp 100 Million).');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/donations/record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          donorName: trimmedName,
          donorEmail: trimmedEmail,
          donorPhone: donorPhone.trim(),
          donorMessage: donorMessage.trim(),
          amount,
          saplingsCount: saplingsEquivalent,
          frequency,
          paymentMethod: 'bank'
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setTransactionRef(data.data.refId);
        setIsSuccess(true);
      } else {
        setErrorMsg(data.error || (isId ? 'Gagal memproses donasi' : 'Failed to process donation'));
      }
    } catch (err) {
      setErrorMsg(isId ? 'Gagal terhubung ke server.' : 'Network error.');
    } finally {
      setLoading(false);
    }
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

              {/* Payment Method Display */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#1A1A1A] tracking-wider mb-2 flex items-center justify-between">
                  <span>{isId ? 'Metode Pembayaran' : 'Payment Method'}</span>
                  <span className="text-[11px] text-[#2D5A27] font-semibold flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" /> Transfer Bank Resmi
                  </span>
                </label>

                <div className="space-y-2 text-xs">
                  {HEPI_INFO.bankAccounts.map((acc) => (
                    <div key={acc.number} className="p-3 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] flex items-center justify-between">
                      <div>
                        <div className="font-bold text-[#1A1A1A]">{acc.bank}</div>
                        <div className="font-mono text-sm text-[#2D5A27] font-extrabold">{acc.number}</div>
                        <div className="text-[11px] text-[#666666]">a.n. {acc.holder}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(acc.number, acc.number)}
                        className="p-2 rounded-full bg-white border border-[#EBEBE8] text-[#1A1A1A] hover:bg-[#2D5A27] hover:text-white transition-colors"
                        title={isId ? 'Salin nomor rekening' : 'Copy account number'}
                      >
                        {copiedBank === acc.number ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

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

              {errorMsg && (
                <div className="p-3 rounded-2xl bg-red-50 border border-red-100 text-red-700 text-xs flex items-center gap-2">
                  <span>⚠️ {errorMsg}</span>
                </div>
              )}

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
                  disabled={loading}
                  className="flex-1 w-full py-3.5 px-4 rounded-full bg-[#2D5A27] hover:bg-[#22461E] disabled:opacity-50 text-white font-bold text-sm shadow-2xs transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5 text-emerald-200 fill-current" />
                  <span>
                    {loading
                      ? (isId ? 'Memproses...' : 'Processing...')
                      : (isId 
                          ? `Konfirmasi Donasi Rp ${amount.toLocaleString('id-ID')}` 
                          : `Confirm Donation Rp ${amount.toLocaleString('id-ID')}`)}
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
