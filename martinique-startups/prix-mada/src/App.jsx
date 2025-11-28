import React, { useState } from 'react';
import { ScanBarcode, Search, ShoppingCart, TrendingDown, Camera, ArrowRight, Barcode } from 'lucide-react';
import ProductScanner from './components/ProductScanner';
import PriceComparison from './components/PriceComparison';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const comparisonData = {
    product: {
      name: "Riz Basmati 1kg",
      brand: "Lustucru",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80"
    },
    prices: [
      { store: "Hyper U", price: 3.45, location: "Lamentin", isCheapest: true },
      { store: "Carrefour", price: 3.89, location: "Ducos", isCheapest: false },
      { store: "Leader Price", price: 3.65, location: "Rivière-Salée", isCheapest: false }
    ]
  };

  return (
    <div className="min-h-screen bg-red-50 font-sans text-red-900">
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Stop à la vie chère"
        subtitle="Rejoignez le mouvement. Comparez les prix en temps réel et faites de vraies économies."
        color="red"
      />

      {/* Header */}
      <header className="bg-white border-b border-red-100 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <Barcode className="text-white" size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">Prix<span className="text-red-600">Mada</span>972</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-red-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-red-700 transition"
          >
            Mon Panier
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-red-900 text-white border-b border-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-bounce">
            <TrendingDown size={16} />
            Économisez jusqu'à 30% sur vos courses
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Stop à la<br />
            <span className="text-red-400">Vie Chère.</span>
          </h1>

          <p className="text-xl text-red-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Scannez n'importe quel produit. Trouvez instantanément où il est le moins cher en Martinique.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Camera size={20} />
              Scanner un produit
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-white text-red-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Rechercher
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm font-bold opacity-80">
            <div className="flex flex-col items-center">
              <span className="text-2xl">50k+</span>
              <span>Produits</span>
            </div>
            <div className="h-8 w-px bg-red-500/50"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">150+</span>
              <span>Magasins</span>
            </div>
            <div className="h-8 w-px bg-red-500/50"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">100%</span>
              <span>Gratuit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scanner Demo */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-6">
              Comparez en un clin d'œil
            </h2>
            <p className="text-lg text-red-700 mb-8 leading-relaxed">
              Ne payez plus jamais trop cher. Notre application compare les prix de tous les supermarchés de l'île en temps réel.
            </p>

            <PriceComparison data={comparisonData} />
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-20 rounded-full"></div>
            <ProductScanner />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-red-900 mb-4">Prêt à faire des économies ?</h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-red-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-800 transition shadow-xl"
          >
            Télécharger l'application <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
