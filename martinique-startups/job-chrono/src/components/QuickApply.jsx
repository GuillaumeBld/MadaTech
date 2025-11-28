import React from 'react';
import { Zap } from 'lucide-react';

export default function QuickApply() {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 z-50">
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-900/50 flex items-center justify-center gap-2 animate-pulse hover:animate-none transition transform hover:scale-105">
                <Zap size={24} className="fill-white" />
                Créer mon profil Express
            </button>
        </div>
    );
}
