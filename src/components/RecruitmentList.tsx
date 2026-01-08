
import { CheckCircle } from 'lucide-react';

const recruits = [
    { id: 1, name: 'Lucas D.', role: 'Assistant Chef de Produit', city: 'Paris', status: 'Validé' },
    { id: 2, name: 'Emma H.', role: 'Contrôleur de Gestion Jr', city: 'Lyon', status: 'Validé' },
    { id: 3, name: 'Thomas R.', role: 'Data Analyst', city: 'Paris', status: 'Validé' },
    { id: 4, name: 'Sarah M.', role: 'Chargée de Com.', city: 'Nantes', status: 'Validé' },
    { id: 5, name: 'Hugo P.', role: 'Développeur Fullstack', city: 'Lille', status: 'Validé' },
];

export function RecruitmentTable() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-8">
            <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">Derniers recrutements sécurisés</h3>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        <th className="px-6 py-4">Candidat</th>
                        <th className="px-6 py-4">Poste</th>
                        <th className="px-6 py-4">Ville</th>
                        <th className="px-6 py-4">Statut Logement</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {recruits.map((recruit) => (
                        <tr key={recruit.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{recruit.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{recruit.role}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{recruit.city}</td>
                            <td className="px-6 py-4 text-sm">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-manseo-green border border-green-100">
                                    <CheckCircle className="w-3.5 h-3.5" />
                                    {recruit.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
