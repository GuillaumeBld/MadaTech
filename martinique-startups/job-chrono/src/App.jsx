import React, { useState } from 'react';
import { Zap, Clock, MapPin, Euro, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import JobFeed from './components/JobFeed';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Serveur(se) pour Mariage",
      company: "Traiteur Créole",
      location: "Trois-Îlets",
      rate: "15€/h",
      duration: "6h",
      urgent: true,
      time: "Ce soir 18h",
      image: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Manutentionnaire",
      company: "Entrepôt ZI",
      location: "Lamentin",
      rate: "13€/h",
      duration: "4h",
      urgent: true,
      time: "Demain 8h",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Hôte(sse) d'accueil",
      company: "Salon Auto",
      location: "Ducos",
      rate: "14€/h",
      duration: "8h",
      urgent: false,
      time: "Samedi",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Missions Flash"
        subtitle="Recevez les missions urgentes directement sur votre téléphone. Premier arrivé, premier servi."
        color="purple"
      />

      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 p-2 rounded-lg">
              <Zap className="text-white" size={20} fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tight">Job<span className="text-purple-500">Chrono</span>972</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-purple-400 transition"
          >
            Espace Recruteur
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-black border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black"></div>

        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-pulse">
            <Clock size={16} />
            Paiement en 24h chrono
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Besoin de cash<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">ou de staff ?</span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            La plateforme de missions ultra-courtes en Martinique.
            Trouvez une mission pour ce soir ou un extra pour demain.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-900/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Briefcase size={20} />
              Trouver une mission
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-white/10 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition flex items-center justify-center gap-2"
            >
              <Zap size={20} />
              Recruter en urgence
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <CheckCircle size={16} className="text-green-500" />
              Profils vérifiés
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <CheckCircle size={16} className="text-green-500" />
              Assurance incluse
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <CheckCircle size={16} className="text-green-500" />
              Paiement sécurisé
            </div>
          </div>
        </div>
      </div>

      {/* Job Feed Demo */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
            <Zap className="text-yellow-400 fill-yellow-400 animate-pulse" />
            Missions Urgentes
          </h2>
          <button className="text-purple-400 font-bold hover:text-purple-300 flex items-center gap-1">
            Voir tout <ArrowRight size={16} />
          </button>
        </div>

        <JobFeed jobs={jobs} />

        <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Étudiant ou à la recherche d'un complément ?</h3>
          <p className="text-purple-200 mb-6">Inscris-toi pour recevoir les alertes missions directement sur WhatsApp.</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-purple-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Créer mon profil
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
