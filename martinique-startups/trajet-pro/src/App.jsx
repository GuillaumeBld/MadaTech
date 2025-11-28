import React, { useState } from 'react';
import { Car, MapPin, Calendar, Clock, Shield, Leaf, ArrowRight, Building2 } from 'lucide-react';
import RideList from './components/RideList';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rides = [
    {
      id: 1,
      driver: "Thomas M.",
      role: "Ingénieur @ SARA",
      rating: 4.9,
      from: "Le Lamentin",
      to: "Fort-de-France",
      departure: "07:30",
      arrival: "08:15",
      price: "3,50 €",
      seats: 2,
      co2: "2.4kg",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/SARA_Logotype.svg/1200px-SARA_Logotype.svg.png" // Placeholder
    },
    {
      id: 2,
      driver: "Sarah L.",
      role: "Comptable @ GBH",
      rating: 4.8,
      from: "Rivière-Salée",
      to: "Ducos",
      departure: "07:45",
      arrival: "08:10",
      price: "2,00 €",
      seats: 3,
      co2: "1.8kg",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      companyLogo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/6f/Logo_Groupe_Bernard_Hayot.svg/1200px-Logo_Groupe_Bernard_Hayot.svg.png" // Placeholder
    },
    {
      id: 3,
      driver: "Marc D.",
      role: "RH @ CTM",
      rating: 5.0,
      from: "Schoelcher",
      to: "Fort-de-France",
      departure: "08:00",
      arrival: "08:20",
      price: "Gratuit",
      seats: 1,
      co2: "1.2kg",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      companyLogo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/23/Logo_Collectivit%C3%A9_Territoriale_Martinique.svg/1200px-Logo_Collectivit%C3%A9_Territoriale_Martinique.svg.png" // Placeholder
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Rejoignez le réseau Pro"
        subtitle="Covoiturez avec vos collègues et voisins. Économisez sur vos trajets domicile-travail."
        color="teal"
      />

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-teal-600 p-2 rounded-lg">
              <Car className="text-white" size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">Trajet<span className="text-teal-600">Pro</span>972</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-teal-600 transition"
          >
            Espace Entreprise
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-300 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <Building2 size={16} />
            Réseau actif : ZI Lézarde • Pointe des Grives • Jambette
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Covoiturage<br />
            <span className="text-teal-400">Domicile-Travail.</span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez 5000+ salariés martiniquais qui économisent carburant et bouchons chaque matin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-teal-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Car size={20} />
              Proposer un trajet
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              Chercher un trajet
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition duration-500">
            {/* Placeholder logos for companies */}
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Ride List Demo */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
            Départs demain matin
          </h2>
          <button className="text-teal-600 font-bold hover:text-teal-700 flex items-center gap-1">
            Voir tout <ArrowRight size={16} />
          </button>
        </div>

        <RideList rides={rides} />

        <div className="mt-12 bg-teal-50 border border-teal-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-teal-900 mb-2">Votre entreprise n'est pas encore partenaire ?</h3>
            <p className="text-teal-700">Devenez ambassadeur et gagnez 1 mois de trajets gratuits.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition whitespace-nowrap"
          >
            Parrainer ma boîte
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
