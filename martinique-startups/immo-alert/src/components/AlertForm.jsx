import React, { useState } from 'react';
import { Bell, CheckCircle } from 'lucide-react';

export default function AlertForm({ onActivate }) {
    const [formData, setFormData] = useState({
        commune: '',
        budget: '',
        type: 'T2',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onActivate(formData);
    };

    return (
        <div className="bg-card border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/20 p-3 rounded-xl text-primary">
                    <Bell size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Créer une alerte</h2>
                    <p className="text-gray-400 text-sm">Recevez les annonces avant tout le monde.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Secteur (Commune)</label>
                    <select
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                        value={formData.commune}
                        onChange={(e) => setFormData({ ...formData, commune: e.target.value })}
                        required
                    >
                        <option value="" className="bg-dark">Choisir une commune...</option>
                        <option value="Schoelcher" className="bg-dark">Schoelcher</option>
                        <option value="Fort-de-France" className="bg-dark">Fort-de-France</option>
                        <option value="Lamentin" className="bg-dark">Le Lamentin</option>
                        <option value="Trois-Îlets" className="bg-dark">Les Trois-Îlets</option>
                        <option value="Ducos" className="bg-dark">Ducos</option>
                        <option value="Trinité" className="bg-dark">La Trinité</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Budget Max</label>
                        <div className="relative">
                            <input
                                type="number"
                                placeholder="800"
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-8 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                                value={formData.budget}
                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                required
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Type de bien</label>
                        <select
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        >
                            <option value="Studio" className="bg-dark">Studio</option>
                            <option value="T2" className="bg-dark">T2</option>
                            <option value="T3" className="bg-dark">T3</option>
                            <option value="T4+" className="bg-dark">T4+</option>
                            <option value="Villa" className="bg-dark">Villa</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Numéro WhatsApp</label>
                    <input
                        type="tel"
                        placeholder="+596 696..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                    />
                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                        <CheckCircle size={12} className="text-green-500" />
                        Nous ne partageons jamais votre numéro.
                    </p>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition transform hover:scale-[1.02]"
                >
                    Activer l'alerte
                </button>
            </form>
        </div>
    );
}
