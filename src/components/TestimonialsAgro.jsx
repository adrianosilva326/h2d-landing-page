// src/components/TestimonialsAgro.jsx

import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

/**
 * Componente TestimonialsAgro
 * Exibe depoimentos focados EXCLUSIVAMENTE em clientes do agronegócio.
 */
export function TestimonialsAgro() {
  
  // --- DEPOIMENTOS ESPECÍFICOS DO AGRO ---
  const testimonialsAgro = [
    {
      quote: 'O galpão para grãos ficou excelente. A H2D entendeu nossa necessidade de ventilação e entregou rápido, antes da colheita.',
      author: 'José B. Almeida',
      position: 'Proprietário',
      company: 'Fazenda Santa Rita',
    },
    {
      quote: 'Finalmente consegui guardar todo o maquinário em local seguro. O vão livre que projetaram foi o diferencial. Recomendo.',
      author: 'Marcos Oliveira',
      position: 'Gerente Agrícola',
      company: 'Grupo AgroNorte',
    },
  ];

  return (
    <section className="py-16 px-4 bg-[var(--h2d-blue-dark)] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Produtores Rurais que Confiam na H2D</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsAgro.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                 {/* Opcional: Adicionar estrelas */}
                 <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[var(--h2d-yellow)] fill-current" />
                  ))}
                </div>
                <p className="text-white text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-bold text-[var(--h2d-yellow)]">{testimonial.author}</p>
                  <p className="text-blue-100">{testimonial.position}, {testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}