import React, { useState } from 'react';
import { X, Check, Loader2 } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose, title, subtitle, color = "blue" }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            console.log('Lead captured:', email);
        }, 1500);
    };

    const getButtonColor = () => {
        const colors = {
            blue: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-200",
            green: "bg-green-600 hover:bg-green-700 focus:ring-green-200",
            teal: "bg-teal-600 hover:bg-teal-700 focus:ring-teal-200",
            purple: "bg-purple-600 hover:bg-purple-700 focus:ring-purple-200",
            orange: "bg-orange-600 hover:bg-orange-700 focus:ring-orange-200",
            red: "bg-red-600 hover:bg-red-700 focus:ring-red-200",
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
                {status === 'success' ? (
                    <div className="p-8 text-center">
                        <div className={`w-16 h-16 bg-${color}-100 text-${color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                            <Check size={32} strokeWidth={3} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Vous êtes sur la liste !</h3>
                        <p className="text-gray-500 mb-6">Nous vous préviendrons dès que l'accès sera ouvert. Merci de votre confiance.</p>
                        <button onClick={onClose} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 rounded-xl transition">
                            Fermer
                        </button>
                    </div>
                ) : (
                    <div className="p-8">
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X size={20} />
                        </button>

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title || "Rejoindre la file d'attente"}</h3>
                            <p className="text-gray-500">{subtitle || "Soyez le premier informé lors du lancement officiel."}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-${color}-500 focus:ring-2 outline-none transition`}
                                    placeholder="vous@exemple.com"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`w-full text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${getButtonColor()}`}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Inscription...
                                    </>
                                ) : (
                                    "M'inscrire maintenant"
                                )}
                            </button>
                        </form>

                        <p className="text-xs text-center text-gray-400 mt-4">
                            🔒 Pas de spam. Désinscription à tout moment.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
