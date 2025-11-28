import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function BasketBuilder({ count }) {
    return (
        <div className="fixed bottom-6 left-6 right-6 z-50">
            <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between cursor-pointer hover:bg-gray-800 transition">
                <div className="flex items-center gap-4">
                    <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl">
                        {count}
                    </div>
                    <div>
                        <div className="font-bold">Mon Panier Idéal</div>
                        <div className="text-xs text-gray-400">3 magasins optimisés</div>
                    </div>
                </div>
                <div className="flex items-center gap-2 font-bold text-green-400">
                    142.50€ <ArrowRight size={20} />
                </div>
            </div>
        </div>
    );
}
