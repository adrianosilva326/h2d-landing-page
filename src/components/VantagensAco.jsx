// src/components/VantagensAco.jsx

import { Card, CardContent } from './ui/card';
import { Zap, Maximize, DollarSign, ShieldCheck } from 'lucide-react';

/**
 * Componente VantagensAco
 * Exibe os benefícios principais do uso de estrutura metálica
 * para o público industrial/comercial.
 */
export function VantagensAco() {
  
  const beneficios = [
    {
      icon: Zap,
      title: 'Agilidade e Rapidez na Obra',
      description: 'Estruturas pré-fabricadas que reduzem drasticamente o tempo de construção, permitindo um retorno mais rápido do seu investimento.',
    },
    {
      icon: Maximize,
      title: 'Maiores Vãos Livres',
      description: 'A resistência do aço permite vãos livres amplos, otimizando seu layout interno, fluxo logístico e armazenamento vertical.',
    },
    {
      icon: DollarSign,
      title: 'Custo-Benefício e Racionalização',
      description: 'Menor desperdício de material, fundações mais leves e obra mais limpa, resultando em maior economia a curto e longo prazo.',
    },
  ];

  return (
    <section id="vantagens-aco" className="py-16 px-4 bg-[var(--h2d-gray-light)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Por que construir com Estrutura Metálica?</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">A solução ideal para quem busca velocidade, eficiência e o máximo de aproveitamento do espaço.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {beneficios.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--h2d-yellow)]">
              <CardContent className="p-8 text-center">
                <item.icon className="h-16 w-16 text-[var(--h2d-blue-medium)] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)] mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}