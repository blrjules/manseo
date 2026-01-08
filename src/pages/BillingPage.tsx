
import { DashboardLayout } from '../components/DashboardLayout';
import { Download, CreditCard, Calendar } from 'lucide-react';

const invoices = [
    { id: 'INV-2026-001', date: '01/01/2026', amount: '2,450.00€', status: 'Payée', items: 'Loyers Janvier (5)' },
    { id: 'INV-2025-128', date: '01/12/2025', amount: '1,960.00€', status: 'Payée', items: 'Loyers Décembre (4)' },
    { id: 'INV-2025-112', date: '01/11/2025', amount: '1,960.00€', status: 'Payée', items: 'Loyers Novembre (4)' },
];

export default function BillingPage() {
    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Facturation</h1>
                    <p className="text-gray-500 mt-1">Retrouvez toutes vos factures consolidées.</p>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-manseo-green text-white p-6 rounded-xl shadow-md">
                    <div className="opacity-80 mb-2 flex items-center gap-2"><CreditCard className="w-4 h-4" /> Total Facturé (YTD)</div>
                    <div className="text-3xl font-bold">2,450.00€</div>
                    <div className="text-sm opacity-80 mt-1">Depuis le 1er Janvier</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-gray-500 mb-2 flex items-center gap-2 text-sm font-medium"><Calendar className="w-4 h-4" /> Prochaine Échéance</div>
                    <div className="text-3xl font-bold text-gray-900">01 Fév.</div>
                    <div className="text-sm text-gray-400 mt-1">Estimation: ~2,900€</div>
                </div>
            </div>

            {/* Invoice List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900">Historique des factures</h3>
                    <button className="text-sm font-medium text-gray-500 hover:text-manseo-green">Tout télécharger</button>
                </div>
                <div className="divide-y divide-gray-100">
                    {invoices.map((inv) => (
                        <div key={inv.id} className="p-4 px-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                                    <FileTextIcon />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">{inv.id}</div>
                                    <div className="text-xs text-gray-500">{inv.date} • {inv.items}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-bold text-gray-900 tabular-nums">{inv.amount}</span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    {inv.status}
                                </span>
                                <button className="p-2 text-gray-400 hover:text-manseo-green hover:bg-green-50 rounded-lg transition-colors">
                                    <Download className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}

function FileTextIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
    )
}
