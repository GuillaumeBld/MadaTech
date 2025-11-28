import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const NativeAd = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-50 to-emerald-50 p-1 shadow-sm my-8 mx-4 md:mx-0 group">
            {/* Animated Scan Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] z-0 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 bg-white/60 backdrop-blur-sm rounded-xl p-6">
                {/* Icon/Image */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shadow-inner">
                        <ShieldCheck size={32} />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                        Partenaire Mobilité
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                        Roulez l'esprit tranquille
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Vos trajets domicile-travail assurés tous risques. 0€ de franchise en cas de pépin pendant un covoiturage.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                    <button className="group/btn relative overflow-hidden rounded-lg bg-teal-600 px-6 py-3 text-white font-semibold shadow-md transition-all hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5">
                        <span className="relative z-10 flex items-center gap-2">
                            Voir l'offre <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl"></div>
        </div>
    );
};

export default NativeAd;
