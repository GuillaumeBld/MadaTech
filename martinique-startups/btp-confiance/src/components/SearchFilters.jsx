import React from 'react';
import { Search, MapPin } from 'lucide-react';

export default function SearchFilters({ filters, setFilters }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Métier</label>
                    <select
                        className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 font-medium"
                        value={filters.trade}
                        onChange={(e) => setFilters({ ...filters, trade: e.target.value })}
                    >
                        <option value="">Tous les métiers</option>
                        <option value="Plombier">Plombier</option>
                        <option value="Électricien">Électricien</option>
                        <option value="Maçon">Maçon</option>
                        <option value="Peintre">Peintre</option>
                        <option value="Climatisation">Climatisation</option>
                    </select>
                </div>

                <div className="relative">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Commune</label>
                    <div className="relative">
                        <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select
                            className="w-full p-3 pl-10 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 font-medium"
                            value={filters.location}
                            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                        >
                            <option value="">Toute la Martinique</option>
                            <option value="Fort-de-France">Fort-de-France</option>
                            <option value="Lamentin">Le Lamentin</option>
                            <option value="Schoelcher">Schoelcher</option>
                            <option value="Ducos">Ducos</option>
                            <option value="Trinité">La Trinité</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-end">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2">
                        <Search size={20} />
                        Trouver un artisan
                    </button>
                </div>
            </div>
        </div>
    );
}
