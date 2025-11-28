import React, { useState } from 'react';
import { Map, AlertTriangle, Sun, Wind, Droplets, Navigation, Camera, ArrowRight, Waves } from 'lucide-react';
import BeachList from './components/BeachList';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const beaches = [
    {
      id: 1,
      name: "Les Salines",
      location: "Sainte-Anne",
      status: "Propre",
      lastUpdate: "Il y a 10 min",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
      weather: { temp: "29°C", wind: "15 km/h", water: "28°C" }
    },
    {
      id: 2,
      name: "Anse Michel",
      location: "Sainte-Anne",
      status: "Sargasses",
      lastUpdate: "Il y a 25 min",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80",
      weather: { temp: "28°C", wind: "20 km/h", water: "27°C" }
    },
    {
      id: 3,
      name: "Le Diamant",
      location: "Le Diamant",
      status: "Moyen",
      lastUpdate: "Il y a 5 min",
      image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80",
      weather: { temp: "30°C", wind: "12 km/h", water: "28°C" }
    }
  ];

  return (
    <div className="min-h-screen bg-cyan-50 font-sans text-cyan-900">
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Rejoignez les sentinelles"
        subtitle="Participez à la surveillance des plages et recevez des alertes sargasses en temps réel."
        color="green"
      />

      {/* Header */}
      <header className="bg-white border-b border-cyan-100 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-cyan-600 p-2 rounded-lg">
              <Waves className="text-white" size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">Sargasses<span className="text-cyan-600">Info</span>972</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-cyan-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-cyan-700 transition"
          >
            Connexion
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-cyan-900 text-white border-b border-cyan-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <Sun size={16} />
            Mise à jour : Il y a 5 min
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Météo des Plages<br />
            <span className="text-cyan-400">& Sargasses.</span>
          </h1>

          <p className="text-xl text-cyan-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Vérifiez l'état de votre plage préférée avant de partir. Données mises à jour en temps réel par la communauté.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-cyan-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Map size={20} />
              Voir la carte
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-white text-cyan-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition flex items-center justify-center gap-2"
            >
              <Camera size={20} />
              Signaler
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm font-bold">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              Propre
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
              Moyen
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              Sargasses
            </div>
          </div>
        </div>
      </div>

      {/* Beach List Demo */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-cyan-900">
            Plages populaires
          </h2>
          <button className="text-cyan-600 font-bold hover:text-cyan-700 flex items-center gap-1">
            Voir tout <ArrowRight size={16} />
          </button>
        </div>

        <BeachList beaches={beaches} />

        <div className="mt-12 bg-white border border-cyan-100 rounded-2xl p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-cyan-900 mb-2">Contribuez à la communauté</h3>
          <p className="text-cyan-600 mb-6">Gagnez des points en signalant l'état des plages et aidez les autres usagers.</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-700 transition"
          >
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
