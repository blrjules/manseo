
import { DashboardLayout } from '../components/DashboardLayout';
import { Search, Filter, Download, Plus, CheckCircle, Clock, XCircle } from 'lucide-react';

const allRecruits = [
    { id: 1, name: 'Lucas D.', role: 'Assistant Chef de Produit', city: 'Paris', status: 'Validé', date: '04/01/2026' },
    { id: 2, name: 'Emma H.', role: 'Contrôleur de Gestion Jr', city: 'Lyon', status: 'Validé', date: '03/01/2026' },
    { id: 3, name: 'Thomas R.', role: 'Data Analyst', city: 'Paris', status: 'En cours', date: '02/01/2026' },
    { id: 4, name: 'Sarah M.', role: 'Chargée de Com.', city: 'Nantes', status: 'Validé', date: '28/12/2025' },
    { id: 5, name: 'Hugo P.', role: 'Développeur Fullstack', city: 'Lille', status: 'Validé', date: '20/12/2025' },
    { id: 6, name: 'Chloé B.', role: 'RH Assistant', city: 'Paris', status: 'Refusé', date: '15/12/2025' },
    { id: 7, name: 'Maxime L.', role: 'Ingénieur R&D', city: 'Sophia Antipolis', status: 'En cours', date: '10/12/2025' },
];

function StatusBadge({ status }: { status: string }) {
    if (status === 'Validé') {
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-manseo-green border border-green-100"><CheckCircle className="w-3.5 h-3.5" />{status}</span>;
    }
    if (status === 'En cours') {
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-100"><Clock className="w-3.5 h-3.5" />{status}</span>;
    }
    return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 border border-red-100"><XCircle className="w-3.5 h-3.5" />{status}</span>;
}

export default function RecruitmentsPage() {
    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Mes Recrutements</h1>
                    <p className="text-gray-500 mt-1">Gérez vos demandes de logement pour vos alternants.</p>
                </div>
                <button className="bg-manseo-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2 shadow-sm">
                    <Plus className="w-4 h-4" /> Nouvelle Demande
                </button>
            </div>

            {/* Filters Base */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex justify-between items-center">
                <div className="flex gap-4 items-center w-full max-w-lg">
                    <div className="relative flex-1">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Rechercher un candidat, poste..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-manseo-green/30 outline-none"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100">
                        <Filter className="w-4 h-4" /> Filtres
                    </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-manseo-green transition-colors">
                    <Download className="w-4 h-4" /> Exporter
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Candidat</th>
                            <th className="px-6 py-4">Poste</th>
                            <th className="px-6 py-4">Ville</th>
                            <th className="px-6 py-4">Statut Logement</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {allRecruits.map((recruit) => (
                            <tr key={recruit.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-500 tabular-nums">{recruit.date}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{recruit.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{recruit.role}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{recruit.city}</td>
                                <td className="px-6 py-4 text-sm">
                                    <StatusBadge status={recruit.status} />
                                </td>
                                <td className="px-6 py-4 text-sm text-right">
                                    <button className="text-manseo-green font-medium hover:underline">Détails</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
