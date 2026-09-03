// src/components/TrustBar.jsx

import { Award, Building, Users, Wrench } from 'lucide-react';

export function TrustBar() {
  const trustMetrics = [
    {
      icon: Award,
      title: '+20 Anos de Experiência',
      description: 'Tradição e conhecimento no mercado.',
    },
    {
      icon: Building,
      title: '+300 Projetos Entregues',
      description: 'Sucesso comprovado em obras.',
    },
    {
      icon: Users,
      title: 'Engenheiros Credenciados',
      description: 'Equipe técnica com registro no CREA.',
    },
    {
      icon: Wrench,
      title: 'Soluções Turn-Key',
      description: 'Cuidamos de tudo, do início ao fim.',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center">
              <metric.icon className="h-10 w-10 text-[var(--h2d-blue-medium)] mb-3" />
              <p className="font-bold text-lg text-[var(--h2d-blue-dark)]">{metric.title}</p>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}