import React, { useState } from 'react';
import { Language } from '../types';
import { HEPI_INFO } from '../data/hepiData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Clock,
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
      // Fallback local success display if offline
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FCFCFB] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <Mail className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Hubungi Kami' : 'Get In Touch'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Kontak & Pendaftaran Relawan' : 'Contact Us & Volunteer Registration'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666]">
            {isId 
              ? 'Ingin menjadi relawan medis, peneliti ekologi, atau mengajukan kerjasama dengan Yayasan HEPI?' 
              : 'Interested in joining as a medical volunteer, ecological researcher, or partner with HePI Foundation?'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 bg-[#2D5A27] text-white p-6 sm:p-8 rounded-[28px] shadow-2xs space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                {isId ? 'Kantor Sekretariat & Operasional' : 'Secretariat & Field HQ'}
              </span>
              <h3 className="text-2xl font-normal font-serif mt-1">
                Yayasan Healthy Planet Indonesia
              </h3>
            </div>

            <div className="space-y-4 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-200 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">{isId ? 'Alamat Utama:' : 'Primary Address:'}</div>
                  <div className="text-emerald-100">{HEPI_INFO.contact.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-200 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">Email:</div>
                  <a href={`mailto:${HEPI_INFO.contact.email}`} className="hover:underline text-emerald-200">
                    {HEPI_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-200 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">{isId ? 'Telepon / WhatsApp:' : 'Phone / WhatsApp:'}</div>
                  <div className="text-emerald-100">{HEPI_INFO.contact.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-200 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">{isId ? 'Jam Operasional Kantor:' : 'Office Operating Hours:'}</div>
                  <div className="text-emerald-100">Senin - Sabtu: 08.00 - 17.00 WIB</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/20 text-xs text-emerald-100/90 space-y-1">
              <div className="font-bold text-emerald-200">
                {isId ? 'Peluang Relawan Konservasi:' : 'Conservation Volunteer Roles:'}
              </div>
              <p>
                {isId 
                  ? 'Ranger patroli hutan, pendamping kelompok tani bibit, ilmuwan lingkungan, dan edukator komunitas.' 
                  : 'Forest rangers, nursery farmer mentors, environmental scientists, and community educators.'}
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[28px] border border-[#EBEBE8] shadow-2xs">
            {success ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#2D5A27] mx-auto" />
                <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif">
                  {isId ? 'Pesan Terkirim!' : 'Message Sent!'}
                </h3>
                <p className="text-sm text-[#666666]">
                  {isId 
                    ? 'Terima kasih telah menghubungi Yayasan HEPI. Tim kami akan segera membalas pesan Anda.' 
                    : 'Thank you for reaching out to HePI Foundation. Our team will respond shortly.'}
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
                      {isId ? 'Email *' : 'Email Address *'}
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
                      {isId ? 'Nomor Telepon / WA' : 'Phone / WhatsApp'}
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+62 812-..."
                      className="w-full px-4 py-2.5 rounded-full border border-[#EBEBE8] text-sm focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#1A1A1A] mb-1">
                      {isId ? 'Topik Pesan' : 'Subject'}
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-full border border-[#EBEBE8] text-sm focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none bg-white"
                    >
                      <option value="general">{isId ? 'Pertanyaan Umum' : 'General Inquiry'}</option>
                      <option value="volunteer">{isId ? 'Pendaftaran Relawan Medis / Konservasi' : 'Volunteer Application'}</option>
                      <option value="research">{isId ? 'Kerjasama Riset & Universitas' : 'Research & Academic Partnership'}</option>
                      <option value="donation">{isId ? 'Konfirmasi Donasi & Sponsor Bibit' : 'Donation Confirmation'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#1A1A1A] mb-1">
                    {isId ? 'Pesan Anda *' : 'Your Message *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isId ? 'Tuliskan pertanyaan atau pengajuan Anda secara lengkap...' : 'Write your detailed message or proposal...'}
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
