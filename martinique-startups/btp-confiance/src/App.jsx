import React, { useState } from 'react';
import { HardHat, MapPin, Star, Shield, CheckCircle, Search, ArrowRight, Hammer } from 'lucide-react';
import ArtisanList from './components/ArtisanList';
import WaitlistModal from './components/WaitlistModal';
import NativeAd from './components/NativeAd';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const artisans = [
    {
      id: 1,
      name: "Jean-Michel B.",
      trade: "Plombier",
      location: "Lamentin",
      rating: 4.9,
      reviews: 124,
      verified: true,
      availability: "Disponible",
      image: "https://images.unsplash.com/photo-1581578731117-104f2a863a30?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Entreprise Elec972",
      trade: "Électricien",
      location: "Fort-de-France",
      rating: 4.8,
      reviews: 89,
      verified: true,
      availability: "Urgence 24/7",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Martinique Peinture",
      trade: "Peintre",
      location: "Schoelcher",
      rating: 4.7,
      reviews: 56,
      verified: true,
      availability: "Sur devis",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Trouvez le bon artisan"
        subtitle="Accédez à notre réseau de 500+ artisans certifiés et vérifiés par la communauté."
        color="orange"
      />

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-2 rounded-lg">
              <HardHat className="text-white" size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">BTP<span className="text-orange-600">Confiance</span>972</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-orange-600 transition"
          >
            Espace Pro
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <Shield size={16} />
            Plateforme certifiée 2025
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Travaux en toute<br />
            <span className="text-orange-500">Sérénité.</span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fini les arnaques et les retards. Trouvez des artisans vérifiés, notés et assurés pour tous vos chantiers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Hammer size={20} />
              Trouver un artisan
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Voir les avis
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm font-bold text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Identité vérifiée
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Assurance décennale
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Avis certifiés
            </div>
          </div>
        </div>
      </div>

      {/* Native Ad Section */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <NativeAd />
      </div>

      {/* Artisan List Demo */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
            Artisans à la une
          </h2>
          <button className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-1">
            Voir tout <ArrowRight size={16} />
          </button>
        </div>

        <ArtisanList artisans={artisans} />

        <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731117-104f2a863a30?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">Vous êtes un professionnel du bâtiment ?</h3>
            <p className="text-slate-400 mb-6">Rejoignez le réseau n°1 en Martinique et développez votre clientèle.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-100 transition"
            >
              Devenir partenaire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
