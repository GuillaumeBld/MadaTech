import React from 'react';
import { Briefcase, User } from 'lucide-react';

export default function RoleSelection({ onSelect }) {
    return (
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto -mt-12 relative z-20 px-4">
            <button
                onClick={() => onSelect('candidate')}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition duration-300 group text-left"
            >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition duration-300">
                    <User size={32} className="text-purple-600 group-hover:text-white transition duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Je cherche un job</h3>
                <p className="text-gray-500">Missions courtes, extras, saisonnier. Payé à la semaine.</p>
            </button>

            <button
                onClick={() => onSelect('recruiter')}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition duration-300 group text-left"
            >
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 transition duration-300">
                    <Briefcase size={32} className="text-pink-600 group-hover:text-white transition duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Je recrute</h3>
                <p className="text-gray-500">Trouvez du staff qualifié en moins de 24h pour vos pics d'activité.</p>
            </button>
        </div>
    );
}
