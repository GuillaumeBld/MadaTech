import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const NativeAd = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-1 shadow-sm my-8 mx-4 md:mx-0 group">
            {/* Animated Scan Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] z-0 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 bg-white/60 backdrop-blur-sm rounded-xl p-6">
                {/* Icon/Image */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner">
                        <Sparkles size={32} />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                        Partenaire
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                        Devenez propriétaire plus vite
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Simulez votre capacité d'emprunt en 2 minutes avec notre partenaire bancaire exclusif. Taux négociés pour les membres ImmoAlert.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                    <button className="group/btn relative overflow-hidden rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-md transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5">
                        <span className="relative z-10 flex items-center gap-2">
                            Simuler mon prêt <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl"></div>
        </div>
    );
};

export default NativeAd;
