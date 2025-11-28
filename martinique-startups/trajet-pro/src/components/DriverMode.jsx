import React from 'react';
import { Car, PlusCircle } from 'lucide-react';

export default function DriverMode({ isDriver, onToggle }) {
    return (
        <div className="bg-teal-900 text-white p-6 rounded-2xl mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                <div className="bg-white/10 p-4 rounded-full">
                    <Car size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold">Vous avez une voiture ?</h3>
                    <p className="text-teal-200">Économisez jusqu'à 200€/mois en partageant vos trajets quotidiens.</p>
                </div>
            </div>

            <button
                onClick={onToggle}
                className="bg-white text-teal-900 px-8 py-4 rounded-xl font-bold hover:bg-teal-50 transition flex items-center gap-2 shadow-lg"
            >
                <PlusCircle size={20} />
                Publier un trajet
            </button>
        </div>
    );
}
