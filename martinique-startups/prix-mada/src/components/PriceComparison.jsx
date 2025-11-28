import React from 'react';
import { ShoppingCart, TrendingDown, Store, ArrowRight } from 'lucide-react';

export default function PriceComparison({ product }) {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Winner Badge */}
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl shadow-lg z-10">
                MEILLEUR PRIX
            </div>

            <div className="flex items-start gap-6 mb-8">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <img src={product.image} alt={product.name} className="w-24 h-24 object-contain" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-500 font-medium">{product.brand} • {product.weight}</p>
                    <div className="mt-3 inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-bold border border-green-100">
                        <TrendingDown size={16} />
                        Économie : -{product.savings}€
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {product.prices.map((price, index) => (
                    <div key={index} className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${index === 0 ? 'bg-green-50/50 border-green-200 shadow-sm scale-[1.02]' : 'bg-white border-gray-100 hover:border-gray-200'}`}>
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${index === 0 ? 'bg-green-500 text-white shadow-lg shadow-green-200' : 'bg-gray-100 text-gray-500'}`}>
                                {index + 1}
                            </div>
                            <div>
                                <div className="font-bold text-gray-900 text-lg">{price.store}</div>
                                {index === 0 && <div className="text-xs text-green-600 font-bold">Le moins cher</div>}
                            </div>
                        </div>
                        <div className="text-right">
                            <div className={`font-bold text-2xl ${index === 0 ? 'text-green-600' : 'text-gray-900'}`}>{price.amount}€</div>
                            {index > 0 && <div className="text-xs text-red-400 font-medium">+{((price.amount - product.prices[0].amount)).toFixed(2)}€</div>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
                    <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
                    Ajouter au panier idéal
                    <ArrowRight size={18} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
            </div>
        </div>
    );
}
