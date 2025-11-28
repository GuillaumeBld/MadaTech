import React from 'react';
import { MapPin, CheckCircle, AlertTriangle, Wind, Droplets, ArrowRight } from 'lucide-react';

export default function BeachList({ beaches }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'clean': return 'from-green-500 to-emerald-600';
            case 'warning': return 'from-orange-400 to-amber-500';
            case 'critical': return 'from-red-500 to-rose-600';
            default: return 'from-gray-400 to-gray-500';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'clean': return 'Eau Cristalline';
            case 'warning': return 'Algues éparses';
            case 'critical': return 'Baignade déconseillée';
            default: return 'Inconnu';
        }
    };

    return (
        <div className="space-y-4 mb-24">
            {beaches.map((beach) => (
                <div key={beach.id} className="bg-white rounded-3xl p-1 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                    <div className={`h-24 rounded-t-[20px] bg-gradient-to-r ${getStatusColor(beach.status)} p-5 text-white relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 p-4 opacity-10 transform rotate-12 scale-150">
                            {beach.status === 'clean' ? <CheckCircle size={100} /> : <AlertTriangle size={100} />}
                        </div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-xl">{beach.name}</h3>
                                <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold border border-white/10">
                                    {getStatusText(beach.status)}
                                </span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-white/90 mt-1">
                                <MapPin size={14} /> {beach.location}
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="flex justify-between items-center text-sm text-gray-600">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5 bg-blue-50 px-2 py-1 rounded-lg text-blue-700">
                                    <Wind size={14} />
                                    <span className="font-bold">{beach.wind}</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-teal-50 px-2 py-1 rounded-lg text-teal-700">
                                    <Droplets size={14} />
                                    <span className="font-bold">27°C</span>
                                </div>
                            </div>
                            <div className="text-xs text-gray-400">
                                Maj: {beach.lastUpdate}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
