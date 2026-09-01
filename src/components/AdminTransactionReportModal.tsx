import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { 
  X, 
  Search, 
  Filter, 
  ArrowUpDown, 
  Download, 
  RefreshCw, 
  DollarSign, 
  Sprout, 
  Users, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  FileSpreadsheet,
  Building2
} from 'lucide-react';

interface Transaction {
  refId: string;
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  donorMessage?: string;
  program?: string;
  package?: string;
  amount: number;
  saplingsCount: number;
  frequency: 'once' | 'monthly';
  paymentMethod: string;
  status: string;
  createdAt: string;
}

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
}

interface AdminTransactionReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AdminTransactionReportModal: React.FC<AdminTransactionReportModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;
  const isId = lang === 'id';

  const [activeTab, setActiveTab] = useState<'transactions' | 'contacts' | 'subscribers'>('transactions');

  // Transactions State
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState({ totalAmount: 0, totalSaplings: 0, count: 0 });
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('all');
  const [selectedFrequency, setSelectedFrequency] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Contacts & Subscribers State
  const [contacts, setContacts] = useState<ContactInquiry[]>([]);
  const [subscribers, setSubscribers] = useState<string[]>([]);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        search: searchQuery,
        method: selectedMethod,
        frequency: selectedFrequency,
        status: selectedStatus,
        sortBy,
        sortOrder
      });

      const res = await fetch(`/api/admin/transactions?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        setTransactions(data.data || []);
        setSummary(data.summary || { totalAmount: 0, totalSaplings: 0, count: 0 });
      }
    } catch (err) {
      console.error('Failed to fetch transactions', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await fetch('/api/admin/contacts');
      const data = await res.json();
      if (data.success) {
        setContacts(data.data || []);
      }
    } catch (err) {
      console.error('Failed to fetch contacts', err);
    }
  };

  const fetchSubscribers = async () => {
    try {
      const res = await fetch('/api/admin/subscribers');
      const data = await res.json();
      if (data.success) {
        setSubscribers(data.data || []);
      }
    } catch (err) {
      console.error('Failed to fetch subscribers', err);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchTransactions();
      fetchContacts();
      fetchSubscribers();
    }
  }, [isOpen, searchQuery, selectedMethod, selectedFrequency, selectedStatus, sortBy, sortOrder]);

  // Export to CSV
  const handleExportCSV = () => {
    if (transactions.length === 0) {
      alert(isId ? 'Tidak ada data transaksi untuk diekspor.' : 'No transaction data to export.');
      return;
    }

    const headers = ['Ref ID', 'Tanggal', 'Nama Donatur', 'Email', 'Telepon', 'Program/Paket', 'Nominal (IDR)', 'Jumlah Bibit', 'Frekuensi', 'Metode', 'Status', 'Pesan'];
    const rows = transactions.map((t) => [
      t.refId,
      new Date(t.createdAt).toLocaleDateString('id-ID'),
      `"${t.donorName.replace(/"/g, '""')}"`,
      t.donorEmail,
      t.donorPhone || '-',
      `"${(t.package || t.program || 'Donasi Bibit').replace(/"/g, '""')}"`,
      t.amount,
      t.saplingsCount,
      t.frequency,
      t.paymentMethod,
      t.status,
      `"${(t.donorMessage || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Laporan_Transaksi_HePI_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Pagination logic
  const totalPages = Math.ceil(transactions.length / itemsPerPage) || 1;
  const paginatedTransactions = transactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-[28px] max-w-5xl w-full p-6 sm:p-8 relative shadow-2xl my-8 space-y-6 max-h-[92vh] flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#EBEBE8] pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-bold border border-[#EBEBE8]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isId ? 'Portal Dasbor Admin & Laporan Transaksi' : 'Admin Portal & Transaction Reports'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal font-serif text-[#1A1A1A]">
              {isId ? 'Laporan Donasi & Database HePI' : 'Donation Reports & Records'}
            </h2>
            <p className="text-xs text-[#666666]">
              {isId 
                ? 'Kelola rekap transaksi donatur, verifikasi transfer bank resmi, dan pesan formulir relawan.' 
                : 'Monitor donor contributions, verify official bank transfers, and review volunteer applications.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#F1F3F0] hover:bg-[#EBEBE8] text-[#1A1A1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#EBEBE8] pb-3 overflow-x-auto">
          <button
            onClick={() => { setActiveTab('transactions'); setCurrentPage(1); }}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'transactions'
                ? 'bg-[#2D5A27] text-white shadow-2xs'
                : 'bg-[#F1F3F0] text-[#666666] hover:text-[#1A1A1A]'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>{isId ? 'Laporan Transaksi' : 'Transactions'} ({summary.count})</span>
          </button>

          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'contacts'
                ? 'bg-[#2D5A27] text-white shadow-2xs'
                : 'bg-[#F1F3F0] text-[#666666] hover:text-[#1A1A1A]'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>{isId ? 'Pesan Kontak Masuk' : 'Contact Inquiries'} ({contacts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('subscribers')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'subscribers'
                ? 'bg-[#2D5A27] text-white shadow-2xs'
                : 'bg-[#F1F3F0] text-[#666666] hover:text-[#1A1A1A]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>{isId ? 'Pelanggan Buletin' : 'Subscribers'} ({subscribers.length})</span>
          </button>
        </div>

        {/* TAB 1: TRANSACTIONS REPORT */}
        {activeTab === 'transactions' && (
          <div className="space-y-5 flex-1 overflow-y-auto pr-1">
            
            {/* KPI Metric Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8]">
                <div className="text-[11px] font-bold text-[#666666] uppercase tracking-wider">
                  {isId ? 'Total Donasi Terkumpul' : 'Total Donations Logged'}
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#2D5A27] mt-1">
                  Rp {summary.totalAmount.toLocaleString('id-ID')}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8]">
                <div className="text-[11px] font-bold text-[#666666] uppercase tracking-wider">
                  {isId ? 'Total Bibit Pohon Terdanai' : 'Total Saplings Sponsored'}
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#1A1A1A] mt-1 flex items-center gap-1.5">
                  <Sprout className="w-6 h-6 text-[#2D5A27]" />
                  <span>{summary.totalSaplings.toLocaleString('id-ID')}</span>
                  <span className="text-xs font-normal text-[#666666]">{isId ? 'bibit' : 'trees'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8]">
                <div className="text-[11px] font-bold text-[#666666] uppercase tracking-wider">
                  {isId ? 'Jumlah Transaksi' : 'Transaction Count'}
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#1A1A1A] mt-1">
                  {summary.count} {isId ? 'Donasi' : 'Records'}
                </div>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="p-4 rounded-2xl bg-[#FCFCFB] border border-[#EBEBE8] space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                
                {/* Search Input */}
                <div className="relative w-full sm:max-w-xs">
                  <Search className="w-4 h-4 text-[#666666] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    placeholder={isId ? 'Cari Ref ID, Donatur, Email...' : 'Search Ref ID, Donor, Email...'}
                    className="w-full pl-9 pr-4 py-2 rounded-full border border-[#EBEBE8] text-xs font-medium text-[#1A1A1A] focus:ring-1 focus:ring-[#2D5A27] focus:border-[#2D5A27] outline-none bg-white"
                  />
                </div>

                {/* Filters & Actions */}
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
                  {/* Frequency Filter */}
                  <select
                    value={selectedFrequency}
                    onChange={(e) => { setSelectedFrequency(e.target.value); setCurrentPage(1); }}
                    className="px-3 py-2 rounded-full border border-[#EBEBE8] text-xs font-medium bg-white text-[#1A1A1A] outline-none"
                  >
                    <option value="all">{isId ? 'Semua Frekuensi' : 'All Frequencies'}</option>
                    <option value="once">{isId ? 'Donasi Sekali' : 'One-Time'}</option>
                    <option value="monthly">{isId ? 'Rutin Bulanan' : 'Monthly Pledge'}</option>
                  </select>

                  {/* Method Filter */}
                  <select
                    value={selectedMethod}
                    onChange={(e) => { setSelectedMethod(e.target.value); setCurrentPage(1); }}
                    className="px-3 py-2 rounded-full border border-[#EBEBE8] text-xs font-medium bg-white text-[#1A1A1A] outline-none"
                  >
                    <option value="all">{isId ? 'Semua Metode' : 'All Methods'}</option>
                    <option value="bank">Transfer Bank</option>
                    <option value="qris">QRIS</option>
                    <option value="cc">Kartu Kredit</option>
                  </select>

                  {/* Sort Order */}
                  <button
                    onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                    className="px-3 py-2 rounded-full border border-[#EBEBE8] bg-white text-xs font-medium flex items-center gap-1 hover:bg-[#F1F3F0]"
                    title="Toggle Sort"
                  >
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#2D5A27]" />
                    <span>{sortOrder === 'desc' ? (isId ? 'Terbaru' : 'Newest') : (isId ? 'Terlama' : 'Oldest')}</span>
                  </button>

                  {/* Refresh Button */}
                  <button
                    onClick={fetchTransactions}
                    className="p-2 rounded-full border border-[#EBEBE8] bg-white hover:bg-[#F1F3F0] text-[#1A1A1A]"
                    title={isId ? 'Muat ulang data' : 'Refresh'}
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  </button>

                  {/* Export CSV */}
                  <button
                    onClick={handleExportCSV}
                    className="px-4 py-2 rounded-full bg-[#2D5A27] text-white hover:bg-[#22461E] text-xs font-bold flex items-center gap-1.5 shadow-2xs"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-200" />
                    <span>{isId ? 'Ekspor CSV' : 'Export CSV'}</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Transactions Table */}
            <div className="border border-[#EBEBE8] rounded-2xl overflow-hidden bg-white shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F1F3F0] text-[#1A1A1A] font-bold uppercase tracking-wider border-b border-[#EBEBE8]">
                    <tr>
                      <th className="py-3 px-4">Ref ID</th>
                      <th className="py-3 px-4">{isId ? 'Donatur' : 'Donor'}</th>
                      <th className="py-3 px-4">{isId ? 'Paket / Program' : 'Package'}</th>
                      <th className="py-3 px-4 text-right">{isId ? 'Nominal' : 'Amount'}</th>
                      <th className="py-3 px-4 text-center">{isId ? 'Bibit' : 'Trees'}</th>
                      <th className="py-3 px-4">{isId ? 'Frekuensi' : 'Frequency'}</th>
                      <th className="py-3 px-4">{isId ? 'Status' : 'Status'}</th>
                      <th className="py-3 px-4">{isId ? 'Tanggal' : 'Date'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBEBE8]">
                    {paginatedTransactions.length > 0 ? (
                      paginatedTransactions.map((tx) => (
                        <tr key={tx.refId} className="hover:bg-[#FCFCFB] transition-colors">
                          <td className="py-3.5 px-4 font-mono font-bold text-[#2D5A27]">
                            {tx.refId}
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-[#1A1A1A]">{tx.donorName}</div>
                            <div className="text-[11px] text-[#666666]">{tx.donorEmail}</div>
                            {tx.donorMessage && (
                              <div className="text-[10px] text-[#2D5A27] italic mt-0.5 line-clamp-1">
                                "{tx.donorMessage}"
                              </div>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-[#555555]">
                            {tx.package || tx.program || (isId ? 'Sponsor Bibit Pohon' : 'Sapling Sponsor')}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-[#1A1A1A] text-right whitespace-nowrap">
                            Rp {tx.amount.toLocaleString('id-ID')}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="px-2 py-0.5 rounded-full bg-[#2D5A27]/10 text-[#2D5A27] font-bold">
                              ~{tx.saplingsCount}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                              tx.frequency === 'monthly'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-neutral-100 text-neutral-700'
                            }`}>
                              {tx.frequency === 'monthly' ? (isId ? 'Rutin Bulanan' : 'Monthly') : (isId ? 'Sekali' : 'One-Time')}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 text-[#2D5A27] font-semibold text-[11px]">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>{isId ? 'Terverifikasi' : 'Verified'}</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-[#666666] whitespace-nowrap">
                            {new Date(tx.createdAt).toLocaleDateString('id-ID', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="py-8 text-center text-xs text-[#666666]">
                          {isId ? 'Tidak ada catatan donasi yang sesuai filter.' : 'No donation records match the filter.'}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              <div className="p-3 bg-[#F1F3F0] border-t border-[#EBEBE8] flex items-center justify-between text-xs">
                <span className="text-[#666666]">
                  {isId ? 'Menampilkan' : 'Showing'} {paginatedTransactions.length} {isId ? 'dari' : 'of'} {transactions.length} {isId ? 'catatan' : 'records'}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="p-1.5 rounded-full bg-white border border-[#EBEBE8] disabled:opacity-40 hover:bg-[#EBEBE8]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-[#1A1A1A]">
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="p-1.5 rounded-full bg-white border border-[#EBEBE8] disabled:opacity-40 hover:bg-[#EBEBE8]"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: CONTACT INQUIRIES */}
        {activeTab === 'contacts' && (
          <div className="space-y-4 flex-1 overflow-y-auto pr-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase text-[#2D5A27] tracking-wider">
                {isId ? 'Daftar Pesan Masuk & Relawan:' : 'Inquiries & Volunteer Submissions:'}
              </span>
              <button
                onClick={fetchContacts}
                className="p-1.5 rounded-full border border-[#EBEBE8] hover:bg-[#F1F3F0]"
                title="Refresh"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#1A1A1A]" />
              </button>
            </div>

            <div className="space-y-3">
              {contacts.map((c) => (
                <div key={c.id} className="p-4 rounded-2xl bg-white border border-[#EBEBE8] shadow-2xs space-y-2 text-xs">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-bold text-sm text-[#1A1A1A]">{c.name}</div>
                      <div className="text-[#666666]">{c.email} • {c.phone}</div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#2D5A27] text-white text-[10px] font-bold uppercase">
                      {c.subject}
                    </span>
                  </div>

                  <p className="p-3 rounded-xl bg-[#F1F3F0] text-[#333333] leading-relaxed">
                    {c.message}
                  </p>

                  <div className="text-[10px] text-[#666666] text-right">
                    {new Date(c.submittedAt).toLocaleString('id-ID')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: NEWSLETTER SUBSCRIBERS */}
        {activeTab === 'subscribers' && (
          <div className="space-y-4 flex-1 overflow-y-auto pr-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase text-[#2D5A27] tracking-wider">
                {isId ? 'Daftar Email Buletin Triwulanan:' : 'Quarterly Dispatch Subscribers:'}
              </span>
              <button
                onClick={fetchSubscribers}
                className="p-1.5 rounded-full border border-[#EBEBE8] hover:bg-[#F1F3F0]"
                title="Refresh"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#1A1A1A]" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] space-y-2 text-xs">
              {subscribers.map((email, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-[#EBEBE8] flex items-center justify-between">
                  <span className="font-mono text-[#1A1A1A] font-medium">{email}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    {isId ? 'Aktif (Per 3 Bulan)' : 'Active (Quarterly)'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-3 border-t border-[#EBEBE8] flex items-center justify-between text-xs text-[#666666]">
          <span>© Yayasan Healthy Planet Indonesia (HePI) — Admin Portal v2.4</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#1A1A1A] text-white hover:bg-neutral-800 font-bold transition-colors"
          >
            {isId ? 'Tutup Dasbor' : 'Close Dashboard'}
          </button>
        </div>

      </div>
    </div>
  );
};
