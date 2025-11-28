import React from 'react';

export default function Navbar({ onViewChange }) {
    return (
        <nav className="relative z-10 flex justify-between items-center p-6 border-b border-white/10 backdrop-blur-md">
            <div
                className="text-2xl font-extrabold tracking-tight cursor-pointer"
                onClick={() => onViewChange('landing')}
            >
                Immo<span className="text-primary">Alert</span><span className="text-xs align-top ml-1 bg-primary/20 text-primary px-2 py-0.5 rounded-full">972</span>
            </div>
            <button
                onClick={() => onViewChange('app')}
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition"
            >
                Connexion
            </button>
        </nav>
    );
}
