import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';

export default function RideSearch({ onSearch }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 -mt-10 relative z-20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Départ</label>
                    <div className="relative">
                        <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Ex: Le Robert"
                            className="w-full p-3 pl-10 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-teal-500 font-medium"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Arrivée</label>
                    <div className="relative">
                        <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-500" />
                        <select className="w-full p-3 pl-10 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-teal-500 font-medium">
                            <option>ZI La Lézarde</option>
                            <option>ZI Jarry (Guadeloupe)</option>
                            <option>Centre-Ville FDF</option>
                            <option>Technopole</option>
                        </select>
                    </div>
                </div>

                <div className="relative">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Date</label>
                    <div className="relative">
                        <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="date"
                            className="w-full p-3 pl-10 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-teal-500 font-medium"
                        />
                    </div>
                </div>

                <div className="flex items-end">
                    <button
                        onClick={onSearch}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-teal-200"
                    >
                        Rechercher
                    </button>
                </div>
            </div>
        </div>
    );
}
