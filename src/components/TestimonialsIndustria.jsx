// src/components/TestimonialsIndustria.jsx

import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

/**
 * Componente TestimonialsIndustria
 * Exibe depoimentos focados EXCLUSIVAMENTE em clientes de indústria e logística.
 */
export function TestimonialsIndustria() {
  
  // --- Depoimentos Específicos ---
  const testimonials = [
    {
      quote: 'A H2D Engenharia superou nossas expectativas! O galpão foi entregue dentro do prazo e com uma qualidade impecável. Um parceiro essencial para o nosso crescimento.',
      author: 'Carlos Silva',
      position: 'Diretor de Operações',
      company: 'LogiCorp Transportes',
    },
    {
      quote: 'Profissionalismo e expertise técnica de primeira linha. A equipe da H2D entendeu perfeitamente nossas necessidades e entregou uma solução sob medida.',
      author: 'Ana Paula Costa',
      position: 'Gerente Industrial',
      company: 'Indústria Alimentícia Pontes',
    },
     {
      quote: 'Excelente custo-benefício e atendimento personalizado. Recomendamos a H2D para qualquer empresa que busque qualidade e confiabilidade.',
      author: 'Ricardo Mendes',
      position: 'CEO',
      company: 'Distribuidora Serviços Ltda.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-[var(--h2d-blue-dark)] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Quem Confia na H2D Engenharia</h2>
           <p className="text-xl text-blue-100">A satisfação de nossos clientes industriais e logísticos é nossa maior conquista.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                 <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[var(--h2d-yellow)] fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-bold text-[var(--h2d-yellow)]">{testimonial.author}</p>
                  <p className="text-blue-100">{testimonial.position}</p>
                  <p className="text-blue-200 text-sm">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}