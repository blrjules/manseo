import React, { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { MapPin, Wifi, BedDouble, Bath, Square, X, Download, Wrench, MessageSquare } from 'lucide-react';

const apartments = [
    { id: 402, address: 'Rue de Courcelles, 75017 Paris', type: 'T1', size: '22m²', status: 'Occupé', tenants: ['L. Dupond', 'M. Martin'], img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2940&auto=format&fit=crop' },
    { id: 305, address: 'Avenue Jean Jaurès, 69007 Lyon', type: 'Studio', size: '18m²', status: 'Occupé', tenants: ['E. Henry'], img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2880&auto=format&fit=crop' },
    { id: 108, address: 'Rue Crébillon, 44000 Nantes', type: 'T2', size: '35m²', status: 'Disponible', tenants: [], img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop' },
    { id: 212, address: 'Rue Faidherbe, 59000 Lille', type: 'T1', size: '20m²', status: 'Occupé', tenants: ['H. Petit'], img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2940&auto=format&fit=crop' },
];

export default function HousingPage() {
    const [selectedHouse, setSelectedHouse] = useState<typeof apartments[0] | null>(null);

    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Parc Logement</h1>
                    <p className="text-gray-500 mt-1">Visualisez les logements Manseo assignés à vos collaborateurs.</p>
                </div>
                <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                    Voir la carte
                </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {apartments.map((apt) => (
                    <div key={apt.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                        <div className="h-48 relative overflow-hidden">
                            <img src={apt.img} alt={apt.address} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-3 right-3">
                                <span className={`px-2 py-1 rounded-md text-xs font-bold ${apt.status === 'Occupé' ? 'bg-white/90 text-manseo-green' : 'bg-green-500 text-white'}`}>
                                    {apt.status}
                                </span>
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-gray-900 mb-1">Logement #{apt.id}</h3>
                            <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                                <MapPin className="w-3.5 h-3.5" />
                                {apt.address}
                            </div>

                            <div className="flex gap-4 mb-4 pb-4 border-b border-gray-100">
                                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
                                    <Square className="w-3.5 h-3.5 text-gray-400" /> {apt.type} • {apt.size}
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
                                    <Wifi className="w-3.5 h-3.5 text-gray-400" /> Inclus
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="text-xs text-gray-500">
                                    {apt.tenants.length > 0 ? (
                                        <>Occupant(s): <span className="text-gray-900 font-medium">{apt.tenants.join(', ')}</span></>
                                    ) : (
                                        <span className="text-green-600 font-medium">Prêt à louer</span>
                                    )}
                                </div>
                                <button
                                    onClick={() => setSelectedHouse(apt)}
                                    className="text-xs font-bold text-manseo-green hover:underline"
                                >
                                    Gérer
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Management Modal */}
            {selectedHouse && (
                <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl transform transition-all animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900">Gérer le Logement #{selectedHouse.id}</h3>
                            <button onClick={() => setSelectedHouse(null)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="flex gap-4 mb-6">
                                <img src={selectedHouse.img} className="w-24 h-24 rounded-lg object-cover bg-gray-100" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{selectedHouse.address}</h4>
                                    <p className="text-sm text-gray-500 mt-1">{selectedHouse.type} • {selectedHouse.size}</p>
                                    <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                                        {selectedHouse.status}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:border-manseo-green hover:bg-green-50/50 transition-colors gap-2 group">
                                    <Download className="w-6 h-6 text-gray-400 group-hover:text-manseo-green" />
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-manseo-green">Contrat de Bail</span>
                                </button>
                                <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:border-manseo-green hover:bg-green-50/50 transition-colors gap-2 group">
                                    <MessageSquare className="w-6 h-6 text-gray-400 group-hover:text-manseo-green" />
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-manseo-green">Contacter Manseo</span>
                                </button>
                                <button className="col-span-2 flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:border-manseo-green hover:bg-green-50/50 transition-colors gap-2 group">
                                    <Wrench className="w-6 h-6 text-gray-400 group-hover:text-manseo-green" />
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-manseo-green">Signaler un incident</span>
                                </button>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end">
                            <button
                                onClick={() => setSelectedHouse(null)}
                                className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}
