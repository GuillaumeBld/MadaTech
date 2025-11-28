import React from 'react';
import { Clock, MapPin, Star, ArrowRight, Leaf } from 'lucide-react';

export default function RideList({ rides }) {
    return (
        <div className="space-y-4 mt-8">
            <h2 className="text-xl font-bold text-gray-900 px-2">Trajets disponibles</h2>
            {rides.map((ride) => (
                <div key={ride.id} className="bg-white rounded-2xl p-0 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                    <div className="p-5">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <img src={ride.driver.avatar} alt={ride.driver.name} className="w-12 h-12 rounded-full bg-gray-100 border-2 border-white shadow-sm" />
                                <div>
                                    <h3 className="font-bold text-gray-900">{ride.driver.name}</h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <span className="flex items-center gap-1 text-yellow-500 font-bold"><Star size={10} fill="currentColor" /> {ride.driver.rating}</span>
                                        <span>•</span>
                                        <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{ride.driver.company}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-2xl text-teal-600">{ride.price}€</div>
                                <div className="text-xs text-green-600 flex items-center justify-end gap-1">
                                    <Leaf size={10} /> 2kg CO2
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 relative">
                            <div className="flex-1">
                                <div className="font-bold text-lg text-gray-900">{ride.departureTime}</div>
                                <div className="text-sm text-gray-500">{ride.from}</div>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center px-2">
                                <div className="w-full h-0.5 bg-gray-200 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1 text-gray-400">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                                <div className="text-xs text-gray-400 mt-1">45 min</div>
                            </div>

                            <div className="flex-1 text-right">
                                <div className="font-bold text-lg text-gray-900">{ride.arrivalTime}</div>
                                <div className="text-sm text-gray-500">{ride.to}</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                            1 place restante
                        </div>
                        <button className="text-sm font-bold text-teal-700 hover:text-teal-900 transition">
                            Réserver
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
