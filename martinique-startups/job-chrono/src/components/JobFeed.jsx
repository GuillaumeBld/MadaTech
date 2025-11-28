import React from 'react';
import { Clock, MapPin, Euro, Zap, ArrowRight } from 'lucide-react';

export default function JobFeed({ jobs, onApply }) {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-red-500/20 p-2 rounded-lg animate-pulse">
                    <Zap size={24} className="text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">Missions Urgentes</h2>
            </div>

            <div className="grid gap-6">
                {jobs.map((job) => (
                    <div key={job.id} onClick={() => onApply(job)} className="bg-gray-800 border border-gray-700 rounded-2xl p-0 hover:border-purple-500 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                            URGENT
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="text-xs font-bold text-purple-400 tracking-wider uppercase mb-1 block">{job.category}</span>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{job.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={14} className="text-purple-500" /> {job.duration}</span>
                                        <span className="flex items-center gap-1"><MapPin size={14} className="text-purple-500" /> {job.location}</span>
                                    </div>
                                </div>
                                <div className="text-right bg-gray-900/50 p-3 rounded-xl border border-gray-700">
                                    <div className="text-3xl font-bold text-white">{job.rate}€</div>
                                    <div className="text-xs text-gray-500">/ heure</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-xs text-gray-400">
                                            ?
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-800 flex items-center justify-center text-xs text-gray-400 pl-1">
                                        +5
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 text-purple-400 font-bold group-hover:translate-x-2 transition-transform">
                                    Accepter la mission <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="h-1 bg-gray-700 w-full">
                            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-3/4"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
