// src/components/PortfolioEstrutura.jsx

import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { X } from 'lucide-react';

// --- Imagens Específicas de Estrutura/Indústria ---
import steelFrame from '../assets/steel-frame-structure.JPG';
import detalheSolda from '../assets/extra-image-9.jpg';
import estruturaTreliça from '../assets/extra-image-10.jpg';
import galpaoIndustrial from '../assets/galpao-moderno-2.jpg';
import estruturaEntardecer from '../assets/extra-image-6.jpg';
import estruturaDetalhe from '../assets/extra-image-8.jpg';


/**
 * Componente PortfolioEstrutura
 * Galeria de projetos focada EXCLUSIVAMENTE em indústria e estruturas metálicas.
 */
export function PortfolioEstrutura() {
  const [selectedImage, setSelectedImage] = useState(null);

  // --- Portfólio Específico ---
  const portfolio = [
    { image: steelFrame, title: 'Montagem de Estrutura', description: 'Execução ágil de estrutura metálica para indústria.' },
    { image: estruturaTreliça, title: 'Projeto de Treliças', description: 'Engenharia de precisão para vãos livres máximos.' },
    { image: detalheSolda, title: 'Qualidade nos Detalhes', description: 'Processo de solda qualificado garantindo segurança total.' },
    { image: galpaoIndustrial, title: 'Galpão Industrial Moderno', description: 'Solução completa para complexos industriais e logísticos.' },
    { image: estruturaEntardecer, title: 'Estrutura Imponente', description: 'Engenharia de grande porte para projetos complexos.' },
    { image: estruturaDetalhe, title: 'Tecnologia Construtiva', description: 'Conexões e sistemas de montagem de alta precisão.' },
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Nossos Projetos em Estrutura Metálica</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">Conheça projetos que transformaram a capacidade produtiva e logística de nossos clientes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolio.map((project, index) => (
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