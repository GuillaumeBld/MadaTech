import React, { useState } from 'react';
import { Search, Bell, MapPin, Filter, ArrowRight, Star, Home } from 'lucide-react';
import ListingFeed from './components/ListingFeed';
import WaitlistModal from './components/WaitlistModal';
import NativeAd from './components/NativeAd';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const listings = [
    {
      id: 1,
      title: "T3 Vue Mer - Schoelcher",
      price: "1 200 €",
      location: "Schoelcher, Terreville",
      type: "Appartement",
      source: "Leboncoin",
      time: "Il y a 15 min",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Villa avec Piscine",
      price: "450 000 €",
      location: "Trois-Îlets",
      type: "Maison",
      source: "Domimmo",
      time: "Il y a 1h",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Studio Meublé",
      price: "650 €",
      location: "Fort-de-France",
      type: "Appartement",
      source: "SeLoger",
      time: "Il y a 2h",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Ne ratez plus aucune annonce"
        subtitle="Recevez les nouvelles annonces de 15 sites différents directement sur WhatsApp, 1h avant tout le monde."
        color="blue"
      />

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Home className="text-white" size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">Immo<span className="text-blue-600">Alert</span>972</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-600 transition"
          >
            Créer une alerte
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <Bell size={16} />
            Nouvelle technologie de veille 2025
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Toutes les annonces.<br />
            <span className="text-blue-400">Avant tout le monde.</span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nous scannons Leboncoin, Domimmo, SeLoger et 12 autres sites en temps réel pour vous envoyer les pépites instantanément.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Bell size={20} />
              Créer une alerte gratuite
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Voir la démo
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm font-bold text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              15 sites scannés
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Temps réel
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Alertes WhatsApp
            </div>
          </div>
        </div>
      </div>

      {/* Native Ad Section */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <NativeAd />
      </div>

      {/* Listing Feed Demo */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
            Dernières pépites détectées
          </h2>
          <button className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-1">
            Voir tout <ArrowRight size={16} />
          </button>
        </div>

        <ListingFeed listings={listings} />

        <div className="mt-12 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium transition"
          >
            Voir les 42 autres annonces <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
