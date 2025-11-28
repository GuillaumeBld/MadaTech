import React from 'react';
import { Camera, Scan, Barcode } from 'lucide-react';

export default function ProductScanner({ onScan }) {
    return (
        <div className="bg-gray-900 rounded-3xl p-8 text-center relative overflow-hidden group cursor-pointer" onClick={onScan}>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>

            {/* Scanning Line Animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>

            <div className="relative z-10 py-12">
                <div className="w-24 h-24 mx-auto bg-gray-800/50 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-gray-700 group-hover:border-green-500/50 transition-colors shadow-2xl">
                    <Barcode size={48} className="text-white group-hover:text-green-400 transition-colors" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Scanner un produit</h2>
                <p className="text-gray-400 mb-8 max-w-xs mx-auto">Pointez votre caméra vers le code-barres pour comparer instantanément.</p>

                <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-all shadow-lg shadow-green-900/20 hover:shadow-green-500/30 transform hover:-translate-y-1">
                    <Camera size={24} />
                    Lancer le scan
                </button>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-white/20 rounded-tl-xl"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-white/20 rounded-tr-xl"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-white/20 rounded-bl-xl"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-white/20 rounded-br-xl"></div>
        </div>
    );
}
