import React from 'react';
import { X, Send } from 'lucide-react';

export default function QuoteModal({ artisan, onClose }) {
    if (!artisan) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 relative animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition"
                >
                    <X size={20} className="text-gray-500" />
                </button>

                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Demander un devis</h3>
                    <p className="text-gray-500 text-sm">À <span className="font-bold text-blue-600">{artisan.name}</span> ({artisan.trade})</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); alert('Devis envoyé !'); }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Votre besoin</label>
                        <textarea
                            className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                            placeholder="Décrivez vos travaux (ex: Fuite d'eau cuisine...)"
                            required
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                            <input type="text" className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                            <input type="tel" className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition">
                        <Send size={18} />
                        Envoyer la demande
                    </button>
                </form>
            </div>
        </div>
    );
}
