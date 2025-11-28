import React from 'react';
import { Star, MapPin, Phone, CheckCircle, ShieldCheck } from 'lucide-react';

export default function ArtisanList({ artisans, onContact }) {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {artisans.map((artisan) => (
                <div key={artisan.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group relative overflow-hidden">
                    {artisan.verified && (
                        <div className="absolute top-0 right-0 bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-bl-xl border-l border-b border-green-100 flex items-center gap-1">
                            <ShieldCheck size={12} /> VÉRIFIÉ
                        </div>
                    )}
                    
                    <div className="flex items-start gap-5 mb-6">
                        <div className="relative">
                            <img src={artisan.avatar} alt={artisan.name} className="w-16 h-16 rounded-2xl bg-gray-50 object-cover border-2 border-white shadow-md" />
                            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-lg border-2 border-white shadow-sm">
                                {artisan.rating} ★
                            </div>
                        </div>
                        
                        <div className="flex-1">
                            <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{artisan.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                <span className="font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{artisan.trade}</span>
                                <span className="flex items-center gap-1"><MapPin size={14} /> {artisan.location}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {artisan.tags.map((tag, i) => (
                                    <span key={i} className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-md border border-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-gray-50">
                        <button
                            onClick={() => onContact(artisan)}
                            className="flex-1 bg-gray-900 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-gray-200 hover:shadow-blue-200 transform hover:-translate-y-0.5"
                        >
                            Demander un devis
                        </button>
                        <button className="px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-600 transition">
                            <Phone size={20} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
