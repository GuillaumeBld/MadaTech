import React from 'react';
import { Home, ExternalLink, Clock, MapPin } from 'lucide-react';

export default function ListingFeed({ listings, activeCriteria }) {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                    <h2 className="text-3xl font-bold mb-2 text-white">Dernières annonces</h2>
                    {activeCriteria ? (
                        <p className="text-sm text-primary flex items-center gap-2 animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Recherche active : {activeCriteria.type} à {activeCriteria.commune}
                        </p>
                    ) : (
                        <p className="text-sm text-gray-400">En attente de vos critères...</p>
                    )}
                </div>
                <div className="text-xs text-gray-500 font-mono">
                    LIVE FEED • {listings.length} RESULTS
                </div>
            </div>

            <div className="grid gap-4">
                {listings.map((item) => (
                    <div key={item.id} className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="flex justify-between items-start mb-3">
                            <div className="flex gap-3">
                                <div className="bg-gray-800 p-2.5 rounded-xl text-gray-400 group-hover:text-white transition-colors">
                                    <Home size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">{item.title}</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <MapPin size={12} />
                                        {item.location} • {item.surface}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-xl text-white">{item.price}</div>
                                <div className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-gray-400 inline-block mt-1">
                                    {item.source}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                            <div className="flex items-center gap-1.5 text-xs font-medium text-green-400">
                                <Clock size={12} />
                                {item.time}
                            </div>
                            <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition group-hover:translate-x-1 duration-300">
                                Voir l'annonce <ExternalLink size={14} />
                            </button>
                        </div>
                    </div>
                ))}

                {listings.length === 0 && (
                    <div className="text-center py-12 text-gray-500 bg-white/5 rounded-2xl border border-dashed border-white/10">
                        Aucune annonce détectée pour le moment.
                    </div>
                )}
            </div>
        </div>
    );
}
