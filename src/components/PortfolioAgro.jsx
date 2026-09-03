// src/components/PortfolioAgro.jsx

import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { X } from 'lucide-react';

// --- Imagens Específicas do Agro (Substitua pelas suas) ---
import galpaoGraos from '../assets/extra-image-1.jpg'; 
import galpaoMaquinario from '../assets/extra-image-2.jpg'; 
import galpaoFazenda from '../assets/extra-image-3.jpg'; 
// Adicione mais imagens aqui
// import galpaoAgro4 from '../assets/galpao-agro-4.jpg'; 
// import galpaoAgro5 from '../assets/galpao-agro-5.jpg'; 
// import galpaoAgro6 from '../assets/galpao-agro-6.jpg'; 

/**
 * Componente PortfolioAgro
 * Exibe uma galeria de projetos focada EXCLUSIVAMENTE no agronegócio.
 * Inclui seu próprio lightbox (modal) para visualização de imagens.
 * Este componente é autônomo (self-contained).
 */
export function PortfolioAgro() {
  const [selectedImage, setSelectedImage] = useState(null);

  // --- PORTFÓLIO ESPECÍFICO DO AGRO ---
  const portfolioAgro = [
    { image: galpaoGraos, title: 'Armazém de Grãos', description: 'Estrutura otimizada para conservação e logística de sacarias.' },
    { image: galpaoMaquinario, title: 'Garagem de Maquinário', description: 'Vão livre amplo para proteção de colheitadeiras e tratores.' },
    { image: galpaoFazenda, title: 'Barracão Multiuso', description: 'Solução versátil para sede de fazenda e oficinas.' },
    // Adicione mais projetos aqui
  ];

  return (
    <>
      {/* --- Lightbox (Modal de Imagem) --- */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 cursor-pointer" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Visualização ampliada" className="max-w-[90vw] max-h-[80vh] rounded-lg object-contain" />
          <button className="absolute top-4 right-4 text-white hover:text-gray-300">
            <X size={32} />
          </button>
        </div>
      )}

      {/* --- Seção do Portfólio --- */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Projetos de Sucesso no Agronegócio</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">Veja galpões que já estão ajudando produtores como você a ter mais eficiência.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolioAgro.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => setSelectedImage(project.image)}>
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[var(--h2d-blue-dark)] mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}