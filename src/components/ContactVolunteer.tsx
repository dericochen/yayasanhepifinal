import React, { useState } from 'react';
import { Language } from '../types';
import { HEPI_INFO } from '../data/hepiData';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Instagram,
  Facebook,
  Globe,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

interface ContactVolunteerProps {
  lang: Language;
}

export const ContactVolunteer: React.FC<ContactVolunteerProps> = ({ lang }) => {
  const isId = lang === 'id';

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setErrorMsg(data.error || (isId ? 'Gagal mengirim pesan' : 'Failed to send message'));
      }
    } catch (err) {
      setErrorMsg(isId ? 'Gagal terhubung ke server. Silakan periksa koneksi internet Anda.' : 'Failed to connect to server. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FCFCFB] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <Mail className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Hubungi Yayasan HEPI' : 'Contact HePI Foundation'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Kontak & Kolaborasi Relawan' : 'Contact & Partnership Inquiries'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666] leading-relaxed">
            {isId 
              ? 'Pendaftaran relawan medis dokter/gigi, peneliti ekologi, kerjasama universitas, dan konfirmasi donasi bibit pohon.' 
              : 'Medical volunteer applications, ecological research collaborations, university partnerships, and tree donation inquiries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Card (Icon-based, without operational schedule, without WhatsApp as requested) */}
          <div className="lg:col-span-5 bg-[#2D5A27] text-white p-6 sm:p-8 rounded-[28px] shadow-2xs space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                {isId ? 'Sekretariat Resmi Yayasan' : 'Official Secretariat HQ'}
              </span>
              <h3 className="text-2xl font-normal font-serif mt-1">
                Yayasan Healthy Planet Indonesia
              </h3>
            </div>

            <div className="space-y-4 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-white/10 text-emerald-300 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">{isId ? 'Alamat Kantor:' : 'HQ Address:'}</div>
                  <div className="text-emerald-100 text-xs mt-0.5">{HEPI_INFO.contact.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-white/10 text-emerald-300 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Email:</div>
                  <a href={`mailto:${HEPI_INFO.contact.email}`} className="text-emerald-200 hover:underline text-xs block mt-0.5">
                    {HEPI_INFO.contact.email}
                  </a>
                  <a href={`mailto:${HEPI_INFO.contact.partnershipEmail}`} className="text-emerald-200 hover:underline text-xs block">
                    {HEPI_INFO.contact.partnershipEmail}
                  </a>
                </div>
              </div>

              {/* Social Channels (Email, IG, FB - strictly no WhatsApp as requested) */}
              <div className="pt-2 border-t border-white/20">
                <div className="font-bold text-emerald-300 text-xs mb-2">
                  {isId ? 'Kanal Media Sosial Resmi:' : 'Official Social Channels:'}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={HEPI_INFO.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors flex items-center gap-2 text-xs font-semibold"
                    title="Instagram @yayasanhepi"
                  >
                    <Instagram className="w-4 h-4 text-emerald-300" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={HEPI_INFO.contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors flex items-center gap-2 text-xs font-semibold"
                    title="Facebook Yayasan HEPI"
                  >
                    <Facebook className="w-4 h-4 text-emerald-300" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/20 text-xs text-emerald-100/90 space-y-1">
              <div className="font-bold text-emerald-300">
                {isId ? 'Peluang Kolaborasi Lapangan:' : 'Field Collaboration Roles:'}
              </div>
              <p>
                {isId 
                  ? 'Dokter umum, dokter gigi, perawat, analis bibit pohon, rimbawan ranger, dan peneliti primatologi Batang Toru.' 
                  : 'Physicians, dentists, nurses, tree nursery analysts, forest rangers, and primatology researchers.'}
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[28px] border border-[#EBEBE8] shadow-2xs">
            {success ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#2D5A27] mx-auto" />
                <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif">
                  {isId ? 'Pesan Berhasil Terkirim!' : 'Message Received!'}
                </h3>
                <p className="text-sm text-[#666666] max-w-md mx-auto">
                  {isId 
                    ? 'Terima kasih telah menghubungi Yayasan HEPI. Tim kami akan segera menindaklanjuti pesan Anda melalui email.' 
                    : 'Thank you for reaching out to HePI Foundation. Our secretariat will follow up with you shortly via email.'}
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 rounded-full bg-[#2D5A27] text-white font-bold text-xs hover:bg-[#22461E]"
                >
                  {isId ? 'Kirim Pesan Lain' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#1A1A1A] mb-1">
                      {isId ? 'Nama Lengkap *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isId ? 'Masukkan nama Anda' : 'Enter your name'}
                      className="w-full px-4 py-2.5 rounded-full border border-[#EBEBE8] text-sm focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#1A1A1A] mb-1">
                      {isId ? 'Alamat Email *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="w-full px-4 py-2.5 rounded-full border border-[#EBEBE8] text-sm focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#1A1A1A] mb-1">
                      {isId ? 'Nomor Telepon' : 'Phone Number'}
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+62 8..."
                      className="w-full px-4 py-2.5 rounded-full border border-[#EBEBE8] text-sm focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#1A1A1A] mb-1">
                      {isId ? 'Topik Pengajuan' : 'Inquiry Subject'}
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-full border border-[#EBEBE8] text-sm focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none bg-white"
                    >
                      <option value="general">{isId ? 'Pertanyaan Umum' : 'General Inquiry'}</option>
                      <option value="volunteer">{isId ? 'Pendaftaran Relawan Medis / Konservasi' : 'Volunteer Application'}</option>
                      <option value="research">{isId ? 'Kerjasama Riset & Universitas (BINUS/USU)' : 'Academic Partnership'}</option>
                      <option value="donation">{isId ? 'Konfirmasi Donasi Bank & Sponsor Pohon/Ternak' : 'Donation Confirmation'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#1A1A1A] mb-1">
                    {isId ? 'Isi Pesan *' : 'Your Message *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isId ? 'Tuliskan rincian pesan, pertanyaan, atau proposal kerjasama Anda...' : 'Write your detailed message, question, or partnership proposal...'}
                    className="w-full px-4 py-3 rounded-2xl border border-[#EBEBE8] text-sm focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-2xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-4 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-bold text-sm shadow-2xs transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-emerald-200" />
                  <span>{loading ? (isId ? 'Mengirim...' : 'Sending...') : (isId ? 'Kirim Pesan Sekarang' : 'Send Message Now')}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
